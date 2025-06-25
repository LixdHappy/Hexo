const YML = require('yamljs');
const fs = require('fs');

let friends = [];
const blacklist = ["友站名称1", "友站名称2", "友站名称3"];

let data_f = YML.parse(
  fs
    .readFileSync('source/_data/link.yml')
    .toString()
    .replace(/(?<=rss:)\s*\n/g, ' ""\n')
);

// 如果顶层就是数组，就直接用它；否则再取 .links
const groups = Array.isArray(data_f) 
  ? data_f 
  : (Array.isArray(data_f.links) ? data_f.links : []);

if (!groups.length) {
  console.error('没有可遍历的链接分组，检查是否提供了 links 数组或顶层就是数组。');
  process.exit(1);
}

groups.forEach((entry, index) => {
  console.log(`正在处理第 ${index} 个链接分组: ${entry.class_name}`);
  if (Array.isArray(entry.link_list)) {
    // 过滤黑名单，然后收集
    const filtered = entry.link_list.filter(linkItem =>
      !blacklist.includes(linkItem.name)
    );
    friends = friends.concat(filtered);

    entry.link_list.forEach((linkItem, idx) => {
      console.log(`--> 第 ${idx} 个链接项:`, linkItem);
    });
  } else {
    console.error(`entry.link_list 不是数组，跳过：`, entry);
  }
});

// 取 banner_suffix，给个默认值避免 undefined
const banner_suffix = data_f.banner_suffix || '.png';
console.log("banner_suffix:", banner_suffix);

// 构造并写文件
const friendData = {
  friends: friends.map(item => [item.name, item.link, item.avatar]),
  banner_suffix
};

fs.writeFileSync(
  './source/friend.json',
  JSON.stringify(friendData, null, 2)
);
console.log('friend.json 文档已生成。');
