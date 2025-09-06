---
title: anzhiyu主题文章板块中关于原创与判定的实现逻辑问题
categories: 主题
tags:
  - Hexo
  - anzhiyu
  - 主题修改
locate: 南宁
cover: https://image-head.gbfun.cc///imgimage-20250824153504106.webp?blog-image?
abbrlink: 6d59bdb1
summary: >-
  这篇文章介绍了Anzhiyu主题中关于原创与转载判定逻辑的问题及其修改方法。作者发现主题在转载文章判定时存在不合理之处，例如版权模块与个人配置的冲突，导致头像和作者信息显示不一致。为解决这一问题，作者提出通过修改主题代码，将判定逻辑从依赖`copyright_author`与`config.author`的对比，改为直接使用`front-matter`中的`copyright`布尔值进行判断。具体修改涉及两个PUG文件，分别调整版权模块和文章信息模块的判定条件，以实现更简洁且一致的转载标识效果。文章还提醒读者在修改前备份原代码，并使用支持语法高亮的编辑器以避免缩进错误。
date: 2025-08-24 16:44:01
swiper_index: 2
top_group_index: 2
---

{% note flat %}

进行主题修改前必看

- 博客魔改有风险，请务必<b>备份</b>你的`原代码`

- 因为`.pug`和`.styl`以及`.yml`等对缩进要求较为严格，请尽量**不要使用记事本等无法提供语法高亮的文本编辑器**进行修改。

- 本文涉及修改内容会以<b>diff代码块</b>进行标识,复制时<b>请不要忘记删除</b>前面的`+,-`符号

- 本帖基于`Anzhiyu主题`进行修改方案编写，因此请读者优先掌握[Anzhiyu主题官方文档](https://docs.anheyu.com/)的内容后再来进行魔改。

  {% endnote %}

## 前言与实现逻辑

在写部分转载文的时候,发现关于转载的判定有些奇怪。

奇怪在哪里呢? 

假如说文章下方的版权模块是更多是为了介绍自己的一个板块,那你就可能可以理解为什么需要将`copyright_author`的作者修改为自己了,一个原因是你修改为转载文的原作者后头像不匹配,显得也不美观。另一个原因是它与你的`.config.author`有所冲突,anzhiyu主题的大量元素与这一项有关,比如说`card-content`个人卡片模块

![个人卡片模块](https://image-head.gbfun.cc///imgimage-20250824154252109.webp?blog-image?)

页脚的网站版权元素

![页脚的网站版权元素](https://image-head.gbfun.cc///imgimage-20250824154411596.webp?blog-image?)

其中带有的名字,均与你的`.config.author`相关联,如果只是单单将`_config.yml`里关于作者的定义删去并不能治本,会导致许多元素缺失。

所以在我的想法里应该要达到什么样的效果呢?

1. 保留`copyright_author`的定义可以写上自己的名字。(尽管它的本意是代表转载文的原作者名字
2. 不与`config`里的`author`冲突(毕竟转载判定只影响文章,而`author`就不同了

所以这里就对部分转载文的原作者抱歉了

![Copyright模块应该需要达到的效果](https://image-head.gbfun.cc///imgimage-20250824153504106.webp?blog-image?)

本来的想法是蛮绕的,因为又是影响这个影响那个,导致思绪不是很好捋清。后来看到[anzhiyu文档](https://docs.anheyu.com/page/front-matter.html)里关于`front-matter`-`copyright`的定义时,

| 写法                  | 解释                                                         |
| --------------------- | ------------------------------------------------------------ |
| copyright             | 【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置) |
| copyright_author      | 【可选】文章版权模块的`文章作者`                             |
| copyright_author_href | 【可选】文章版权模块的`文章作者`链接                         |
| copyright_url         | 【可选】文章版权模块的`文章链接`链接                         |
| copyright_info        | 【可选】文章版权模块的版权声明文字                           |

`copyright`一般来说会在什么情况写在`front-matter`上呢?

聪明的你一定知道--只有在确认它是转载文的时候会写上,而且不仅要写`copyright`的布尔值,还要将关于`copyright`的相关信息补充上

所以思路打开了,就是`只要写上copyright的布尔值就可以判断文章为转载`

当然实现的逻辑会不会有BUG还有待商榷,比如有些刁钻的角度,假如说不写`copyright`的其他值影不影响原创转载的判断等等(~~这我还是不实验了吧,本来就自用的东西~~

## 修改

实现逻辑有了,剩下就是修改。

修改的方式非常简单,所以这一篇的主要目的只是为了说明一下有这种情况发生,以及如何应对不符合常理的逻辑。

1. 

路径`anzhiyu\layout\includes\post\post-copyright.pug`

将原来`.post-copyright__post__info`下方的

```diff
- if (page.copyright_author && page.copyright_author !== config.author)
```

修改为

```diff
+ if page.copyright
```

经过这一步修改后你会发现版权模块的原创与转载逻辑改变了

但是`post-info`的原创与转载判定还没有改变,所以你还要接着下一步

2. 

路径`anzhiyu\layout\includes\header\post-info.pug`下找到

```diff
- if (page.copyright_author && page.copyright_author !== config.author)
```

修改为

```diff
+ if page.copyright === true
```



那么以后就只需要在`front-matter`里添加上`copy-right`就可以实现原创与转载的手动标注