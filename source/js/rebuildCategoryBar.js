function rebuildCategoryBar() {
  const catalogList = document.querySelector('#catalog-list');
  if (!catalogList) return;

  // 清理旧固定项和按钮
  catalogList.querySelectorAll('#首页, #隧道').forEach(el => el.remove());
  document.querySelectorAll('.category-bar-next, .catalog-more').forEach(el => el.remove());

  // 获取分类项
  const normalizePath = p => p.replace(/^\/|\/$/g, '').replace(/index\.html$/i, '');
  const categories = Array.from(catalogList.querySelectorAll('.catalog-list-item'));
  const currentPath = normalizePath(location.pathname);

  // 找到当前分类
  let currentCategory = categories.find(item => {
    const id = normalizePath(item.getAttribute('id') || '');
    return id && id === currentPath;
  });

  // 清空列表
  catalogList.innerHTML = '';

  // 当前分类置顶
  if (currentCategory) {
    catalogList.appendChild(currentCategory);
  }

  // 精选
  const homeItem = document.createElement('div');
  homeItem.className = 'catalog-list-item';
  homeItem.id = '首页';
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.setAttribute('gbtip', '查看所有精选文章');
  homeLink.textContent = '精选';
  homeItem.appendChild(homeLink);
  catalogList.appendChild(homeItem);

  // 全部文章
  const allItem = document.createElement('div');
  allItem.className = 'catalog-list-item';
  allItem.id = '隧道';
  const allLink = document.createElement('a');
  allLink.href = '/archives/';
  allLink.setAttribute('gbtip', '查看所有文章');
  allLink.textContent = '全部文章';
  allItem.appendChild(allLink);
  catalogList.appendChild(allItem);

  // 其他分类
  categories.forEach(item => {
    if (item !== currentCategory) {
      catalogList.appendChild(item);
    }
  });

  // 翻页按钮
  const nextBtn = document.createElement('div');
  nextBtn.className = 'category-bar-next';
  nextBtn.id = 'category-bar-next';
  nextBtn.setAttribute('onclick', 'anzhiyu.scrollCategoryBarToRight()');
  nextBtn.setAttribute('gbtip', '分类条翻页');
  nextBtn.innerHTML = `<i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>`;
  catalogList.after(nextBtn);

  // 更多按钮
  const moreBtn = document.createElement('a');
  moreBtn.className = 'catalog-more';
  moreBtn.href = '/categories/';
  moreBtn.setAttribute('gbtip', '查看所有分类');
  moreBtn.textContent = '更多';
  nextBtn.after(moreBtn);

  // 翻页按钮动画
  nextBtn.addEventListener('click', () => {
    const listWidth = catalogList.scrollWidth;
    const containerWidth = catalogList.clientWidth;
    if (listWidth > containerWidth) {
      nextBtn.classList.toggle('rotated');
    } else {
      nextBtn.classList.remove('rotated');
    }
  });
}

document.addEventListener('DOMContentLoaded', rebuildCategoryBar);
window.addEventListener('pjax:success', rebuildCategoryBar);
