function addStatusTagsWithCache(jsonUrl) {
    const cacheKey = "statusTagsData";
    const cacheExpirationTime = 30 * 60 * 1000; // 半小时

    function clearOldTags() {
        document.querySelectorAll('.flink-list-item .status-tag').forEach(tag => tag.remove());
    }

    function applyStatusTags(data) {
        clearOldTags();

        const linkStatus = data.link_status;
        const cards = document.querySelectorAll('.flink-list-item');

        if (!cards.length) {
            console.warn("⚠️ 没有找到 .flink-list-item，延迟 500ms 再试一次...");
            setTimeout(() => applyStatusTags(data), 500);
            return;
        }

        cards.forEach(card => {
            const linkEl = card.querySelector('a');
            if (!linkEl || !linkEl.href) return;

            const link = linkEl.href.replace(/\/$/, '').toLowerCase();
            const statusTag = document.createElement('div');
            statusTag.classList.add('status-tag');

            const status = linkStatus.find(item =>
                link.includes(item.link.replace(/\/$/, '').toLowerCase())
            );

            if (status) {
                let latencyText = '未知';
                let className = 'status-tag-red';

                if (status.latency >= 0) {
                    latencyText = status.latency.toFixed(2) + ' s';
                    if (status.latency <= 2) {
                        className = 'status-tag-green';
                    } else if (status.latency <= 5) {
                        className = 'status-tag-light-yellow';
                    } else if (status.latency <= 10) {
                        className = 'status-tag-dark-yellow';
                    }
                }

                statusTag.textContent = latencyText;
                statusTag.classList.add(className);

                card.style.position = 'relative';
                card.appendChild(statusTag);
            }
        });
    }

    function fetchDataAndUpdateUI() {
        fetch(jsonUrl + '?t=' + Date.now())
            .then(response => response.json())
            .then(data => {
                applyStatusTags(data);
                const cacheData = { data: data, timestamp: Date.now() };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            })
            .catch(error => console.error('❌ 获取 result.json 出错:', error));
    }

    // 先用缓存
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheExpirationTime) {
            applyStatusTags(data);
        }
    }

    // 再拉最新
    fetchDataAndUpdateUI();
}

// ========= 🚀 入口 =========

// 1. 首次加载
document.addEventListener("DOMContentLoaded", () => {
    addStatusTagsWithCache('https://fca.gbfun.cc/result.json');
});

// 2. 适配 anzhiyu 的 PJAX 页面切换
document.addEventListener("pjax:complete", () => {
    addStatusTagsWithCache('https://fca.gbfun.cc/result.json');
});
