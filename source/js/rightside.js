// 实时更新时钟
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const clockEl = document.getElementById("rightside-clock");
  const periodEl = document.getElementById("rightside-clock-period");
  if (clockEl && periodEl) {
    clockEl.innerText = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
    periodEl.innerText = period;
  }
}
setInterval(updateClock, 1000);
updateClock();

// 刷新缓存：等效 Ctrl+F5
function refreshCache() {
  if (confirm("是否确定刷新博文缓存")) {
    const url = location.pathname + '?refresh=' + new Date().getTime();
    location.href = url;
  }
}

// 展开/收起 toggle
function bindRightsideToggle() {
  const configHide = document.getElementById('rightside-config-hide');
  const toggleBtn = document.getElementById('rightside-config');
  if (!configHide || !toggleBtn) return;

  toggleBtn.onclick = () => {
    if (configHide.classList.contains('show')) {
      configHide.classList.add('hiding');
      setTimeout(() => {
        configHide.classList.remove('show', 'hiding');
        configHide.style.display = 'none';
      }, 250);
    } else {
      configHide.style.display = 'flex';
      requestAnimationFrame(() => {
        configHide.classList.add('show');
      });
    }
  };
}

// 初次加载绑定
document.addEventListener('DOMContentLoaded', () => {
  bindRightsideToggle();
});

// PJAX 页面切换后重新绑定
document.addEventListener('pjax:complete', () => {
  bindRightsideToggle();
});
