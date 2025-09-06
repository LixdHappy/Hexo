// themes/anzhiyu/scripts/catalog.js（或放 Hexo 根的 scripts/）
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

  // 固定项（带 id 便于客户端识别）
  const fixedHTML =
    `<div class="catalog-list-item" id="cat-home"><a href="/" gbtip="查看所有精选文章">精选</a></div>` +
    `<div class="catalog-list-item" id="cat-archives"><a href="/archives/" gbtip="查看所有文章">全部文章</a></div>`;

  let otherHTML = '';
  let currentHTML = '';

  categories.forEach(function(item) {
    const slug = item.slug || item.name || '';
    const safeId = 'cat-' + ('' + slug).replace(/[^\w-]/g, '-');
    const anchor = `<a href="/${item.path}" gbtip="前往 ${item.name} 分类的文章">${item.name}</a>`;
    const one = `<div class="catalog-list-item" id="${safeId}">${anchor}</div>`;

    if (currentName && item.name === currentName) {
      // 如果识别出当前分类，直接使用 selected 类名
      currentHTML = `<div class="catalog-list-item selected" id="${safeId}">${anchor}</div>`;
    } else {
      otherHTML += one;
    }
  });

  // 组合：current（若存在）在最前 -> 固定项 -> 其余分类
  let html = '';
  if (currentHTML) html += currentHTML;
  html += fixedHTML;
  html += otherHTML;

  // 翻页按钮 & 更多（统一输出，带 gbtip 与 onclick，避免模板重复）
  html += `<div class="category-bar-next" id="category-bar-next" onclick="anzhiyu.scrollCategoryBarToRight()" gbtip="分类条翻页">
             <i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>
           </div>`;
  html += `<a class="catalog-more" id="catalog-more" href="/categories/" gbtip="查看所有分类">更多</a>`;

  return html;
});
