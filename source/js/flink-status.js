function addStatusTagsWithCache(jsonUrl) {
    const cacheKey = "statusTagsData";
    const cacheExpirationTime = 30 * 60 * 1000; // 半小时

    function clearOldTags() {
        // ⚡ 避免多次执行时重复生成
        document.querySelectorAll('.flink-list-item .status-tag').forEach(tag => tag.remove());
    }

    function applyStatusTags(data) {
        clearOldTags();

        const linkStatus = data.link_status;

        document.querySelectorAll('.flink-list-item').forEach(card => {
            const linkEl = card.querySelector('a'); 
            if (!linkEl || !linkEl.href) return;

            // 标准化链接（去掉末尾 / 并转小写）
            const link = linkEl.href.replace(/\/$/, '').toLowerCase();

            const statusTag = document.createElement('div');
            statusTag.classList.add('status-tag');

            // 宽松匹配
            const status = linkStatus.find(item =>
                link.includes(item.link.replace(/\/$/, '').toLowerCase())
            );

            if (status) {
                let latencyText = '未知';
                let className = 'status-tag-red'; // 默认红色

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

                // 确保父容器是定位元素
                card.style.position = 'relative'; 
                card.appendChild(statusTag);
            }
        });
    }

    function fetchDataAndUpdateUI() {
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                applyStatusTags(data);
                const cacheData = { data: data, timestamp: Date.now() };
                localStorage.setItem(cacheKey, JSON.stringify(cacheData));
            })
            .catch(error => console.error('❌ 获取 result.json 出错:', error));
    }

    // 先用缓存，再请求最新
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < cacheExpirationTime) {
            applyStatusTags(data);
            //  同时后台刷新，保证延迟信息能更新
            fetchDataAndUpdateUI();
            return;
        }
    }
    fetchDataAndUpdateUI();
}

// ⚠️ 改成你自己的 API 地址
document.addEventListener("DOMContentLoaded", () => {
    addStatusTagsWithCache('https://fca.gbfun.cc/result.json');
});
