import { defineConfig } from 'swpp-backends'

// ===== 可选：你的 EdgeOne 自定义加速域名（没有就留空字符串） =====
const EDGEONE_HOST = '' // 例如 'cdn.edge.gbfun.cc'

// ===== 小工具：统一打印调试日志（避免 SW 环境报错） =====
const debug = (...args: any[]) => {
  try { console.log('[SWPP]', ...args) } catch (_) {}
}

// ===== 目标域的一致化 URL 生成（补足各家不同的路径前缀差异） =====
function toCdnUrl(host: string, pathname: string, search = '', hash = ''): string {
  // jsDelivr 需要加 /npm 前缀
  if (host === 'fastly.jsdelivr.net' || host === 'cdn.jsdelivr.net') {
    return `https://${host}/npm${pathname}${search}${hash}`
  }

  // cdn.cbd.int 假设镜像 jsDelivr 风格，若无 /npm 则补上
  if (host === 'cdn.cbd.int') {
    const p = pathname.startsWith('/npm/') ? pathname : `/npm${pathname}`
    return `https://${host}${p}${search}${hash}`
  }

  // 其他（unpkg / elemecdn / bootcdn）都是无 /npm 前缀
  return `https://${host}${pathname}${search}${hash}`
}

// ===== 为不同主源准备的备用域优先级链 =====
const FALLBACK_CHAIN: Record<string, string[]> = {
  'npm.elemecdn.com': [
    'fastly.jsdelivr.net',   // jsDelivr
    'cdn.cbd.int',           // cbd 镜像
    'cdn.bootcdn.net',       // bootcdn
    'unpkg.com',             // unpkg
    ...(EDGEONE_HOST ? [EDGEONE_HOST] : [])
  ],

  'cdn.cbd.int': [
    'fastly.jsdelivr.net',   // jsDelivr
    'npm.elemecdn.com',      // elemeCDN
    'cdn.bootcdn.net',       // bootcdn
    'unpkg.com',             // unpkg
    ...(EDGEONE_HOST ? [EDGEONE_HOST] : [])
  ],

  'cdn.bootcdn.net': [
    'cdn.cbd.int',           // cbd 镜像
    'npm.elemecdn.com',      // elemeCDN
    'fastly.jsdelivr.net',   // jsDelivr
    'unpkg.com',             // unpkg
    ...(EDGEONE_HOST ? [EDGEONE_HOST] : [])
  ]
}

console.log("[SWPP] 配置文件已加载，DOMAIN_HOST:", new URL('https://blog.gbfun.cc').href)

defineConfig({
  compilationEnv: {
    DOMAIN_HOST: new URL('https://blog.gbfun.cc'),
    SERVICE_WORKER: "sw",
    JSON_HTML_LIMIT: 10,

    // 仅将“带版本号”的第三方库判定为稳定资源
    isStable: (url: URL) => {
      return [
        // jsDelivr（包含 fastly）
        /^(https?:\/\/|\/\/)(cdn|fastly)\.jsdelivr\.net\/npm\/.*@\d+\.\d+\.\d+\//,

        // 主用 CDN
        /^(https?:\/\/|\/\/)npm\.elemecdn\.com\/.*@\d+\.\d+\.\d+\//,
        /^(https?:\/\/|\/\/)cdn\.cbd\.int\/.*@\d+\.\d+\.\d+\//,
        /^(https?:\/\/|\/\/)cdn\.cbd\.int\/.*\/\d+\.\d+\.\d+\//, // 兼容 /1.2.3/ 版本目录
        /^(https?:\/\/|\/\/)cdn\.bootcdn\.net\/.*\/\d+\.\d+\.\d+\//, // ✅ 新增 bootcdn

        // 可选：其他常见镜像（按需保留/删除）
        /^(https?:\/\/|\/\/)cdn\.staticfile\.org\/.*\/\d+\.\d+\.\d+\//,
        /^(https?:\/\/|\/\/)lf\d+-cdn-tos\.bytecdntp\.com\/.*\/\d+\.\d+\.\d+\//
      ].some(it => it.test(url.href))
    },

    VERSION_LENGTH_LIMIT: 512,

    // —— 编译时抓取文件的备用列表（按顺序尝试）——
    NETWORK_FILE_FETCHER: {
      referer: "https://blog.gbfun.cc",
      getStandbyList(input: string | URL): (string | URL)[] {
        const url = typeof input === 'string' ? new URL(input) : input
        const { hostname, pathname, search, hash } = url

        // 仅对我们关心的主源生成备用链
        if (hostname in FALLBACK_CHAIN) {
          const chain = (FALLBACK_CHAIN as any)[hostname] as string[]
          const list = [
            url.href, // 先尝试主源
            ...chain.map(h => toCdnUrl(h, pathname, search, hash))
          ]
          debug('NETWORK_FILE_FETCHER → standby list:', { from: hostname, list })
          return list
        }

        return [url.href]
      }
    }
  },

  crossEnv: {
    CACHE_NAME: "BlogCache",
    VERSION_PATH: "https://id.v3/",
    ESCAPE: 15
  },

  runtimeDep: {
    // —— 运行时兜底：主源超时后再尝试备用源（避免网络抖动误切换）——
    getStandbyRequests: (request: Request): { t: number, l: () => Request[] } | void => {
      const { host, pathname, search, hash } = new URL(request.url)

      if (host in FALLBACK_CHAIN) {
        const chain = (FALLBACK_CHAIN as any)[host] as string[]
        const urls = chain.map(h => toCdnUrl(h, pathname, search, hash))
        debug('runtimeDep → fallback chain prepared:', { from: host, urls })

        return {
          t: 2000, // 主源 2s 未返回，则切备用
          l: () => urls.map(u => {
            debug('runtimeDep → trying standby request:', u)
            return new Request(u, request)
          })
        }
      }
    }
  },

  crossDep: {
    matchCacheRule: {
      runOnBrowser: (url: URL) => {
        let { host, pathname } = url

        // 处理省略 index.html 的情况
        if (pathname.endsWith('/')) pathname += 'index.html'

        // 仅对 blog.gbfun.cc 制定页面缓存规则
        if (host.endsWith('blog.gbfun.cc')) {
          if (pathname.endsWith('.json')) return 3600000   // 1 小时
          if (pathname.endsWith('.html')) return false     // 不缓存 HTML，避免旧页面
          if (pathname.endsWith('.webp') || pathname.endsWith('.jpg') || pathname.endsWith('.png')) return 43200000 // 12 小时
        }

        // 其他静态资源通用缓存
        if (/\.(js|css|woff2|woff|ttf|cur)$/.test(url.pathname)) return 172800000 // 2 天
      },
      runOnNode(url: URL) {
        // @ts-ignore
        return this.runOnBrowser(url)
      }
    }
  }
})
