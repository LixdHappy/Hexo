import {
    defineConfig
} from 'swpp-backends'

defineConfig({
    compilationEnv: {
        DOMAIN_HOST: new URL('https://blog.gbfun.cc'),
        SERVICE_WORKER: "sw",
        JSON_HTML_LIMIT: 10,
        isStable: (url: URL) => {
            return [
                /^(https?:\/\/|\/\/)(cdn|fastly)\.jsdelivr\.net\/npm\/.*@\d+\.\d+\.\d+\//,
                /^(https?:\/\/|\/\/)cdn\.cbd\.int\/.*@\d+\.\d+\.\d+\//,
                /^(https?:\/\/|\/\/)npm\.elemecdn\.com\/.*@\d+\.\d+\.\d+\//,
                /^(https?:\/\/|\/\/)cdn\.jsdmirror\.com\/.*@\d+\.\d+\.\d+\//,
                /^(https?:\/\/|\/\/)cdn\.staticfile\.org\/.*\/\d+\.\d+\.\d+\//,
                /^(https?:\/\/|\/\/)lf\d+-cdn-tos\.bytecdntp\.com\/.*\/\d+\.\d+\.\d+\//
            ].some(it => it.test(url.href))
        },
        VERSION_LENGTH_LIMIT: 512,
        NETWORK_FILE_FETCHER: {
            referer: "https://blog.gbfun.cc",
            getStandbyList(url: string | URL): (string | URL)[] {
                if (typeof url === 'string') url = new URL(url)
                if (url.hostname === 'npm.elemecdn.com') {
                    return [`https://fastly.jsdelivr.net${url.pathname}`]
                }
                return [url]
            }
        }
    },

    crossEnv: {
        CACHE_NAME: "BlogCache",
        VERSION_PATH: "https://id.v3/",
        ESCAPE: 15,
    },

    runtimeDep: {
        getStandbyRequests: (request: Request): {t: number, l: () => Request[]} | void => {
            const srcUrl = request.url
            const {host, pathname} = new URL(srcUrl)
            // 替换为常见国内和稳定的 CDN
            const commonCdnList = [
                'cdn.cbd.int',
                'npm.elemecdn.com',
                'cdn.staticfile.org',
                'cdnjs.cloudflare.com',
                'unpkg.com'
            ]
            const elme = 'npm.elemecdn.com'
            const urlMapper = (it: string) => new Request(it, request)
            if (host === elme) {
                return {
                    t: 2000,
                    l: () => [...commonCdnList.map(it => `https://${it}/npm${pathname}`)].map(urlMapper)
                }
            }
            if (host === 'cdn.cbd.int') {
                const list = commonCdnList.filter(it => it !== 'cdn.cbd.int')
                return {
                    t: 2000,
                    l: () => [...list.map(it => `https://${it}${pathname}`)].map(urlMapper)
                }
            }
        }
    },

    crossDep: {
        matchCacheRule: {
            runOnBrowser: (url: URL)  => {
                let { host, pathname } = url;

                // 处理省略index.html的情况
                if (pathname.endsWith('/')) pathname += 'index.html';

                // 仅仅对于 blog.gbfun.cc 处理 html 和 json
                if (host.endsWith('blog.gbfun.cc')) {
                    if (pathname.endsWith('.json')) return 3600000; // 1 hour
                    if (pathname.endsWith('.html')) return false; // 暂不缓存
                    if (pathname.endsWith('.webp') || pathname.endsWith('.jpg') || pathname.endsWith('.png')) return 43200000; // 12 hours
                }
                if (/\.(js|css|woff2|woff|ttf|cur)$/.test(url.pathname)) return 172800000; // 2 days
            },
            runOnNode(url: URL) {
                // @ts-ignore
                return this.runOnBrowser(url)
            }
        }
    },
})
