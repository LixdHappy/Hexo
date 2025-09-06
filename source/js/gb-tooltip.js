function initTooltip() {
  const tooltip = document.querySelector(".custom-tooltip");
  if (!tooltip) return;

  let hideTimer = null;
  const hasHover = matchMedia("(hover: hover)").matches; // true = 桌面端，false = 移动端

  // 保证默认内联属性存在
  tooltip.style.maxWidth ||= "200px";
  tooltip.style.whiteSpace ||= "pre-wrap";
  tooltip.style.overflowWrap ||= "break-word";
  tooltip.style.opacity ||= "0";

  let activeTarget = null;
  let frozenPos = { top: null, left: null };

  function computePosition(el) {
    tooltip.style.top = "-9999px";
    tooltip.style.left = "-9999px";
    tooltip.classList.remove("bottom");
    void tooltip.offsetHeight;

    const rect = el.getBoundingClientRect();
    const ttRect = tooltip.getBoundingClientRect();
    const offset = 10;

    let top = rect.top - ttRect.height - offset;
    if (rect.top <= ttRect.height + offset) {
      tooltip.classList.add("bottom");
      top = rect.bottom + offset;
    }

    let left = rect.left + rect.width / 2 - ttRect.width / 2;
    const minPad = 8;
    left = Math.max(minPad, Math.min(left, window.innerWidth - ttRect.width - minPad));

    return { top: Math.round(top), left: Math.round(left) };
  }

  function applyFrozen() {
    if (frozenPos.top == null || frozenPos.left == null) return;
    tooltip.style.top = `${frozenPos.top}px`;
    tooltip.style.left = `${frozenPos.left}px`;
  }

  function showTooltip(el, text) {
    // 移动端直接不显示
    if (!hasHover) return;

    clearTimeout(hideTimer);
    activeTarget = el;
    tooltip.textContent = text;
    tooltip.style.opacity = "1";

    frozenPos = computePosition(el);
    applyFrozen();
  }

  function hideTooltip() {
    hideTimer = setTimeout(() => {
      tooltip.style.opacity = "0";
      tooltip.classList.remove("bottom");
      activeTarget = null;
      frozenPos = { top: null, left: null };
    }, 80);
  }

  function bindTargets(root = document) {
    root.querySelectorAll("[gbtip], [data-tooltip]").forEach(el => {
      if (el.dataset.tooltipBound) return;
      el.dataset.tooltipBound = "true";

      const tipText = el.getAttribute("gbtip") || el.getAttribute("data-tooltip");
      if (!tipText) return;

      if (hasHover) {
        // 桌面端 hover 触发
        el.addEventListener("mouseenter", () => showTooltip(el, tipText));
        el.addEventListener("mouseleave", hideTooltip);
      } else {
        // 移动端：直接跳过，不绑定 tooltip 显示
        // 如果你想保留触屏点击显示，可以在这里写逻辑
      }
    });
  }

  function onViewportChange() {
    if (!activeTarget || tooltip.style.opacity === "0" || !activeTarget.isConnected) return;

    const rect = activeTarget.getBoundingClientRect();
    const style = window.getComputedStyle(activeTarget);
    const isFixedOrSticky = style.position === "fixed" || style.position === "sticky";

    const inViewport =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth;

    if (isFixedOrSticky || inViewport) {
      applyFrozen();
    } else {
      hideTooltip();
    }
  }

  bindTargets();

  window.addEventListener("scroll", onViewportChange, { passive: true });
  window.addEventListener("resize", onViewportChange, { passive: true });

  window.addEventListener("pjax:send", hideTooltip);
  window.addEventListener("pjax:success", () => {
    bindTargets(document);
  });
}

document.addEventListener("DOMContentLoaded", initTooltip);

// 针对翻页条的按钮动画js
(function () {
  function normalizePath(path) {
    if (!path) return '/';
    try {
      // 支持绝对或相对 href（基于 location.origin）
      const url = new URL(path, location.origin);
      let p = url.pathname || '/';
      // 保持末尾斜杠，方便比较
      if (!p.endsWith('/')) p = p + '/';
      return p;
    } catch (e) {
      // 如果无法 new URL（极少数相对特殊），退回原始处理
      if (!path.endsWith('/')) return path + '/';
      return path;
    }
  }

  function updateSelected() {
    const list = document.getElementById('catalog-list');
    if (!list) return;

    // 清除已有 selected（避免重复/残留）
    list.querySelectorAll('.catalog-list-item.selected').forEach(n => n.classList.remove('selected'));

    const anchors = Array.from(list.querySelectorAll('.catalog-list-item a'));
    const currentPath = normalizePath(window.location.pathname || '/');

    // 尝试精确匹配 href -> pathname
    let matched = false;
    for (const a of anchors) {
      const href = a.getAttribute('href');
      if (!href) continue;
      const hrefPath = normalizePath(href);
      if (hrefPath === currentPath) {
        const item = a.closest('.catalog-list-item');
        if (item) {
          item.classList.add('selected');
          matched = true;
          break;
        }
      }
    }

    // 若未匹配到，尝试一些宽松规则：
    if (!matched) {
      // 1) 如果当前路径以 /categories/ 开头，尝试匹配包含最后一段的文本（兼容分类页伪静态差异）
      if (currentPath.startsWith('/categories/')) {
        const seg = currentPath.replace(/^\/categories\//, '').replace(/\/$/, '');
        if (seg) {
          for (const a of anchors) {
            if ((a.textContent || '').trim() === decodeURIComponent(seg)) {
              const item = a.closest('.catalog-list-item');
              if (item) { item.classList.add('selected'); matched = true; break; }
            }
          }
        }
      }
    }

    // 2) 仍未匹配：特殊处理首页和 archives
    if (!matched) {
      if (currentPath === '/' || currentPath === '/index.html') {
        const home = document.getElementById('cat-home');
        if (home) { home.classList.add('selected'); matched = true; }
      } else if (currentPath.startsWith('/archives')) {
        const archives = document.getElementById('cat-archives');
        if (archives) { archives.classList.add('selected'); matched = true; }
      }
    }

    // 如果还是没有匹配，保留服务端生成（若已有 selected）或不高亮
  }

  document.addEventListener('DOMContentLoaded', updateSelected);
  window.addEventListener('popstate', updateSelected);
  // 若你使用 PJAX 并触发自定义事件，请确保在 PJAX 完成后调用 updateSelected()
})();