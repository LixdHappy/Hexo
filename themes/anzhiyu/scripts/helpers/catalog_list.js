// themes/anzhiyu/scripts/catalog.js
hexo.extend.helper.register('catalog_list', function(type, page) {
  const catsCollection = hexo.locals.get(type);
  const categories = (catsCollection && typeof catsCollection.toArray === 'function')
    ? catsCollection.toArray()
    : (catsCollection || []);

  // 检测当前分类名（分类页 page.category；文章页取第一个分类）
  let currentName = null;
  if (page) {
    if (page.category) currentName = page.category;
    else if (page.categories && page.categories.data && page.categories.data.length)
      currentName = page.categories.data[0].name;
  }

  // 固定项：精选 + 全部文章
  const fixedHTML =
    `<div class="catalog-list-item" id="cat-home" data-cate="home">
       <a href="/" gbtip="查看所有精选文章">精选</a>
     </div>` +
    `<div class="catalog-list-item" id="cat-archives" data-cate="all">
       <a href="/archives/" gbtip="查看所有文章">全部文章</a>
     </div>`;

  let otherHTML = '';
  let currentHTML = '';

  categories.forEach(function(item) {
    const slug = item.slug || item.name || '';
    const safeId = 'cat-' + ('' + slug).replace(/[^\w-]/g, '-');
    const anchor = `<a href="/${item.path}" gbtip="前往 ${item.name} 分类的文章">${item.name}</a>`;

    if (currentName && item.name === currentName) {
      // 当前分类 -> selected
      currentHTML = `<div class="catalog-list-item selected" id="${safeId}" data-cate="${slug}">${anchor}</div>`;
    } else {
      otherHTML += `<div class="catalog-list-item" id="${safeId}" data-cate="${slug}">${anchor}</div>`;
    }
  });

  // 排布顺序：当前分类（如有） -> 精选 -> 全部文章 -> 其余分类
  let html = '';
  if (currentHTML) html += currentHTML;
  html += fixedHTML;
  html += otherHTML;

  // 翻页按钮（始终存在，但是否动画由 CSS/JS 决定）
  html += `<div class="category-bar-next" id="category-bar-next" onclick="anzhiyu.scrollCategoryBarToRight()" gbtip="分类条翻页">
             <i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>
           </div>`;

  // 更多按钮（始终存在）
  html += `<a class="catalog-more" id="catalog-more" href="/categories/" gbtip="查看所有分类">更多</a>`;

  return html;
});
