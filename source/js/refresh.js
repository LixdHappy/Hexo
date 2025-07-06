// /js/refresh.js

function refreshCache() {
    // 检测是否支持 Service Worker 且已经有一个激活的 controller
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      // 监听 SW 发回的消息
      navigator.serviceWorker.addEventListener('message', function onSWMessage(event) {
        if (event.data === 'success') {
          // 清理完毕后再强刷页面（即使参数被忽略，也能尽量刷新）
          location.reload(true);
          // 为了避免重复触发，移除这次监听
          navigator.serviceWorker.removeEventListener('message', onSWMessage);
        }
      });
  
      // 真正触发 SW 里缓存清理的那段代码
      navigator.serviceWorker.controller.postMessage('refresh');
  
    } else {
      // 不存在 SW 或者还没激活，退回传统刷新
      if (confirm('是否确定刷新博文缓存？这将强制重新加载当前页面')) {
        location.reload(true);
      }
    }
  }
  
  // 确保脚本被加载后，全局可以调用
  window.refreshCache = refreshCache;