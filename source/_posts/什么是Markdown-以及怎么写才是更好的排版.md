---
title: 什么是Markdown 以及怎么写才是更好的排版.
categories: 主题
tags:
  - 基础认识
  - Hexo
  - 文章排版
  - 转载或翻译
swiper_index: 5
top_group_index: 5
location: 南宁
cover: https://blog-image-1302787555.cos.ap-guangzhou.myqcloud.com//img1.Markdown.jpg
copyright: true
copyright_author: LixdHappy
copyright_url: https://markdown.com.cn/
copyright_info: 本文是转载或翻译文章，版权归原作者所有。建议访问原文，转载本文请联系原作者。
abbrlink: edc6e88
summary: >-
  这篇文章介绍了Markdown作为一种轻量级标记语言的基本概念、优势以及如何实现更好的排版。Markdown由John
  Gruber于2004年创建，专注于文字内容，使用纯文本格式，语法简单易学，便于版本控制。文章详细说明了Markdown的核心语法元素，包括标题、段落、换行、强调、引用和列表的写法，并提供了示例和常见错误提示，帮助用户避免排版问题。此外，文章还推荐了Typora等工具来提升写作体验，强调了Markdown的跨平台性和未来兼容性，适合博客写作和文档管理。
date: 2025-06-21 11:17:48
---

{% note success simple %}为了方便自己在写博文的时候参考, 特地为自己安排了 Markdown 语法的教程一环 🤐, 翻译了一下文档, 便于国人理解, 虽然单词都挺基础也罢{% endnote %}

## Markdown入门基础

### Markdown是什么

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

1. 专注于文字内容；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

使用 Markdown 与使用 Word 类编辑器不同。在 Word 之类的应用程序中，单击按钮以设置单词和短语的格式，并且，更改立即可见。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，可以在文本中添加 Markdown 语法，以指示哪些单词和短语看起来应该有所不同。

例如，要表示标题，只须在短语前面添加一个井号即可（例如， `# Heading One`）。或者要加粗一个短语，只须在短语前后各加两个星号即可（例如，`**this text is bold**`）。可能需要一段时间才能习惯在文本中看到 Markdown 语法，尤其是如果你已习惯了所见即所得的应用程序。以下屏幕截展示了 Markdown 文件在 [Notepad++ 文本编辑器] 中显示的效果。

![Markdown 源文件](https://markdown.com.cn/assets/img/notepad.3541bd12.png)

你可以使用文本编辑器为纯文本文件添加 Markdown 格式的元素。或者，你也可以安装针对 macOS、Windows、Linux、iOS 和 Android 操作系统的 Markdown 应用程序。或者还可以使用一些基于 Web 的应用程序用于 Markdown 编写。

依赖于你所使用的应用程序，你可能无法实时预览格式化的文档。但是没关系。[根据 Gruber 的说法 (opens new window)](https://daringfireball.net/projects/markdown/)，Markdown 的语法被设计为可读性强且不显眼，因此即使 Markdown 文件中的文本未经过渲染也易于阅读。

> `Markdown 语法的首要设计目标是尽可能易读。`基于这个目标，Markdown 格式的文档能够以纯文本形式原样发布，而不会看起来像被填满了标签或格式化指令。

### 为什么要使用 Markdown？

当你可以通过按下界面中的按钮来设置文本格式时，为什么还要使用 Markdown 来书写呢？使用 Markdown 而不是 word 类编辑器的原因有：

- Markdown 无处不在。StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记、V2EX、光谷社区等。主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。
- Markdown 是纯文本可移植的。几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不喜欢当前使用的 Markdown 应用程序了，则可以将 Markdown 文件导入另一个 Markdown 应用程序中。这与 Microsoft Word 等文字处理应用程序形成了鲜明的对比，Microsoft Word 将你的内容锁定在专有文件格式中。
- Markdown 是独立于平台的。你可以在运行任何操作系统的任何设备上创建 Markdown 格式的文本。
- Markdown 能适应未来的变化。即使你正在使用的应用程序将来会在某个时候不能使用了，你仍然可以使用文本编辑器读取 Markdown 格式的文本。当涉及需要无限期保存的书籍、大学论文和其他里程碑式的文件时，这是一个重要的考虑因素。

### 工欲善其事，必先利其器

Markdown 入门的最佳方式就是多使用它。由于有大量免费工具的存在，上手 Markdown 是很方便的。比较遗憾的一点是各平台可能采用不同语言实现的 Markdown 解析引擎，或采用同一解析引擎的不同版本，而且可能有不同程度的定制与扩展，这导致在不同平台上使用 Markdown 写作时体验并不完全一致。不过幸好对于大家公认的一些标准语法，各家都是支持的。

你甚至都不需要下载任何程序，就可以使用[在线 Markdown 编辑器 (opens new window)](https://markdown.com.cn/editor/)来编写 Markdown。进入其站点就可以开始在左侧窗格中书写了。渲染后的文档在右侧窗格预览。

阅读本指南时，你可以打开 [在线 Markdown 编辑器 (opens new window)](https://markdown.com.cn/editor/)。这样，你就可以一边学习 Markdown 语法一边练习了。熟悉 Markdown 之后，再选择一个顺手的 Markdown 的应用程序

***更推荐入门的Typora,使用体验非常重要***

## Markdown语法速查表

### 总览

Markdown 速查表提供了所有 Markdown 语法元素的基本解释。如果你想了解某些语法元素的更多信息，请参阅更详细的 [基本语法](https://markdown.com.cn/basic-syntax) 和 [扩展语法](https://markdown.com.cn/extended-syntax).

### 基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

| 元素  | Markdown 语法   |
| ------ | ------------ |
| [标题（Heading）](https://markdown.com.cn/basic-syntax/headings.html) | `# H1## H2### H3`                                |
| [粗体（Bold）](https://markdown.com.cn/basic-syntax/bold.html) | `**bold text**`                                  |
| [斜体（Italic）](https://markdown.com.cn/basic-syntax/italic.html) | `*italicized text*`                              |
| [引用块（Blockquote）](https://markdown.com.cn/basic-syntax/blockquotes.html) | `> blockquote`                                   |
| [有序列表（Ordered List）](https://markdown.com.cn/basic-syntax/ordered-lists.html) | `1. First item` `2. Second item` `3. Third item` |
| [无序列表（Unordered List）](https://markdown.com.cn/basic-syntax/unordered-lists.html) | `- First item- Second item- Third item`          |
| [代码（Code）](https://markdown.com.cn/basic-syntax/code.html) | ``code``                                         |
| [分隔线（Horizontal Rule）](https://markdown.com.cn/basic-syntax/horizontal-rules.html) | `---`                                            |
| [链接（Link）](https://markdown.com.cn/basic-syntax/links.html) | `[title](https://www.example.com)`               |
| [图片（Image）](https://markdown.com.cn/basic-syntax/images.html) | `![alt text](image.jpg)`                         |

### 扩展语法

这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素。

| 元素                                                         | Markdown 语法                                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [表格（Table）](https://markdown.com.cn/extended-syntax/tables.html) | `| Syntax      | Description |`<br>`| ----------- | ----------- |`<br>`| Header      | Title       |`<br>`| Paragraph   | Text        |` |
| [代码块（Fenced Code Block）](https://markdown.com.cn/extended-syntax/fenced-code-blocks.html) | <code>```</code><br><code>{</code><br> <code>"firstName": "John",</code><br> <code>"lastName": "Smith",</code><br> <code>"age": 25</code><br><code>}</code><br><code>```</code> |
| [脚注（Footnote）](https://markdown.com.cn/extended-syntax/footnotes.html) | Here's a sentence with a footnote. `[^1]` `[^1]`: This is the footnote. |
| [标题编号（Heading ID）](https://markdown.com.cn/extended-syntax/heading-ids.html) | `### My Great Heading {#custom-id}`|
| [定义列表（Definition List）](https://markdown.com.cn/extended-syntax/definition-lists.html) | `term: definition`|
| [删除线（Strikethrough）](https://markdown.com.cn/extended-syntax/strikethrough.html) | `~~The world is flat.~~`|
| [任务列表（Task List）](https://markdown.com.cn/extended-syntax/task-lists.html) | `- [x] Write the press release- [ ] Update the website- [ ] Contact the media` |

## Markdown基本语法

### Markdown 标题语法

#### 示例 ✅

要创建标题，请在单词或短语前面添加井号 (`#`) 。# 的数量代表了标题的级别。例如，添加三个 # 表示创建一个三级标题 (`<h3>`) (例如：`### 标题`)。
{% del 理论可以无限续#号, 创无数个标题 %}

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
|`# 一级标题` |`<h1>一级标题</h1>`|<h1> 一级标题 </h1>|
|`## 二级标题` | `<h2>二级标题</h2>` |<h2> 二级标题 </h2>|
|`### 三级标题`|`<h3>三级标题</h3>`|<h3> 三级标题 </h3>|
|`#### 四级标题`|`<h4>四级标题</h4>`|<h4> 四级标题 </h4>|
|`##### 五级标题`|`<h5>五级标题</h5>`|<h5> 五级标题 </h5>|
|`###### 六级标题`|`<h6>六级标题</h6>`|<h6> 六级标题 </h6>|

#### 可选语法 🔃

还可以在文本下方添加任意数量的 `==` 号来标识一级标题，或者 `--` 号来标识二级标题。

{% psw 反正我没试出来, 可能是 Typora 不支持? %}

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
|`一级标题`<br>`====`|`<h1>一级标题</h1>`|<h1> 一级标题 </h1>|
|`二级标题`<br>`----`|`<h2>二级标题</h2>`|<h2> 二级标题 </h2>|

#### 常见错误 ❌

不同的 Markdown 应用程序处理 `#` 和标题之间的空格方式并不一致。为了兼容考虑，{% label 请用一个空格在#和标题之间进行分隔。  red %}

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `# 这是一级标题` | `#这是一级标题` |



### Markdown 段落语法

#### 示例 ✅

要创建段落，请使用 **`空白行`** 将一行或多行文本进行分隔。{% psw 说实话我更喜欢用 br 语法来切行, 反正阅读习惯都是换行即段(bushi) %}

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| `我热衷于使用Markdown.`<br><br />`我想从现在开始我会用它来处理我的所有文档.` | `<p>我热衷于使用Markdown.</p>`<br><br/>`<p>我想从现在开始我会用它来处理我的所有文档.</p>` | <p> 我热衷于使用 Markdown.</p> <p> 我想从现在开始我会用它来处理我的所有文档.</p> |



#### 常见错误 ❌

{% label 不要用空格或制表符缩进段落。red %}

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `不要在段落前添加制表符或空格。.`<br><br>`保持行左对齐，就像这样.` | `这可能会导致格式问题.`<br><br> `不要在段落前添加制表符或空格.` |

### Markdown 换行语法

#### 示例 ✅

在一行的末尾添加两个或多个空格，然后按回车键, 即可创建一个换行(`<br>`)。



|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| `这是第一行.  接着这是第二行.` | `<p>这是第一行.<br>接着这是第二行.</p>` | 这是第一行. <br>接着这是第二行. |

#### 常见错误 ❌

几乎每个 Markdown 应用程序都支持两个或多个空格进行换行，称为 `结尾空格（trailing whitespace)` 的方式，但这是有争议的，因为很难在编辑器中直接看到空格，并且很多人在每个句子后面都会有意或无意地添加两个空格。由于这个原因，你可能要使用除结尾空格以外的其它方式来换行。幸运的是，几乎每个 Markdown 应用程序都支持另一种换行方式：HTML 的 `<br>` 标签。{% psw (真神) %}

为了兼容性，请在行尾添加“结尾空格”或 HTML 的 `<br>` 标签来实现换行。

还有两种其他方式我并不推荐使用。CommonMark 和其它几种轻量级标记语言支持在行尾添加反斜杠 (`\`) 的方式实现换行，但是并非所有 Markdown 应用程序都支持此种方式，因此从兼容性的角度来看，不推荐使用。并且至少有两种轻量级标记语言支持无须在行尾添加任何内容，只须键入回车键（`return`）即可实现换行。

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `第一行后带有两个空格.`<br>`接着起下一行.`<br><br>`在第一行HTML标签后使用.<br>`<br>`接着起下一行.` | `第一行后带有反斜杠号.\`<br>`接着起下一行.`<br><br>`第一行后没带任何标签.`<br>`接着起下一行.`|

### Markdown 强调语法

通过将文本设置为 **粗体** 或 ***斜体*** 来强调其重要性。

#### 粗体（Bold）

##### 示例 ✅

要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
|`我真爱用 **粗体**.`|`我真爱用 <strong>粗体</strong>.`| 我真爱用 **粗体**. |
|`我真爱用 __粗体__.`|`我真爱用 <strong>粗体</strong>.`| 我真爱用 **粗体**. |
|`爱**是**勇敢的` |`爱<strong>是</strong>勇敢的`| 爱**是勇敢的|

##### 常见错误 ❌

Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语{% label 中间部分加粗 blue %}的话，{% label 请使用星号（asterisks）。 red %}

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `爱**是**勇敢的` | `爱__是__勇敢的` |

#### 斜体（Italic）

##### 示例 ✅

要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，{% label 中间不要带空格。 red %}

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
|`斜体文字真是 *妙不可言*.`|`斜体文字真是 <em>妙不可言</em>.`|斜体文字真是 *妙不可言*.|
|`斜体文字真是 _妙不可言_.`|`斜体文字真是 <em>妙不可言</em>.`|斜体文字真是 *妙不可言*.|
|`一声*猫*叫`|`一声<em>猫</em>叫`| 一声 *猫* 叫|

##### 常见错误 ❌

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
|`一声*猫*叫`|`一声_猫_叫`|

#### 粗体（Bold）和斜体（Italic）

##### 示例 ✅

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
|`这段文字 ***真的很重要***.`|`这段文字 <strong><em>真的很重要</em></strong>.`| 这段文字 ***真的很重要\***.    |
| `这段文字 ___真的很重要___.`    | `这段文字 <strong><em>真的很重要</em></strong>.`    | 这段文字 ***真的很重要\***.    |
| `这段文字 __*真的很重要*__.`    | `这段文字 <strong><em>真的很重要</em></strong>.`    | 这段文字 ***真的很重要\***.    |
| `这段文字 **_真的很重要_**.`    | `这段文字 <strong><em>真的很重要</em></strong>.`    | 这段文字 ***真的很重要\***.    |
| `这是真的***非常***重要的文字.` | `这是真的<strong><em>非常</em></strong>重要的文字.` | 这是真的***非常\***重要的文字. |

##### 常见错误 ❌

Markdown 应用程序在处理单词或短语中间添加的下划线上并不一致。为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。

| ✅ 这样做                        | ❌ 不要这样做                    |
| ------------------------------- | ------------------------------- |
| `这是真的***非常***重要的文字.` | `这是真的___非常___重要的文字.` |

### Markdown 引用语法

#### 单个段落的块引用

要创建块引用，请在段落前添加一个 `>` 符号。

```text
> Dorothy跟着她穿过她城堡里许多漂亮的房间。
```

渲染效果如下所示：

> Dorothy 跟着她穿过她城堡里许多漂亮的房间。

#### 多个段落的块引用

块引用可以包含多个段落。为段落之间的空白行添加一个 `>` 符号。

```text
> Dorothy跟着她穿过她城堡里许多漂亮的房间。
>
> 女巫吩咐她清洗锅碗瓢盆，打扫地板，并用木头保持炉火燃烧。
```

渲染效果如下：

> Dorothy 跟着她穿过她城堡里许多漂亮的房间。
>
> 女巫吩咐她清洗锅碗瓢盆，打扫地板，并用木头保持炉火燃烧。

#### 嵌套块引用

块引用可以嵌套。在要嵌套的段落前添加一个 `>>` 符号。

```text
> Dorothy跟着她穿过她城堡里许多漂亮的房间。
>
>> 女巫吩咐她清洗锅碗瓢盆，打扫地板，并用木头保持炉火燃烧。
```

渲染效果如下：

> Dorothy 跟着她穿过她城堡里许多漂亮的房间。
>
> > 女巫吩咐她清洗锅碗瓢盆，打扫地板，并用木头保持炉火燃烧。

#### 带有其它元素的块引用

块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。

```text
> #### 本季度业绩收获颇丰!
>
> - 收入超出了图表的范围。
> - 利润比以往任何时候都要高
>
>  *一切*都在按照**计划**进行下去
```

渲染效果如下：

> #### 本季度业绩收获颇丰
>
> - 收入超出了图表的范围.
> - 利润比以往任何时候都要高.
>
> *一切* 都在按照 **计划** 进行下去

### Markdown 列表语法

可以将多个条目组织成有序或无序列表。

#### 有序列表

要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| `1. 第一项`<br>`2. 第二项`<br>`3. 第三项`<br>`4. 第四项`|`<ol>`<br>`<li>第一项</li>`<br>`<li>第二项</li>`<br>`<li>第三项</li>`<br>`<li>第四项</li>`<br>`</ol>`|<ol><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ol>|
|`1. 第一项`<br/>`1. 第二项`<br/>`1. 第三项`<br/>`1. 第四项`|`<ol>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项</li>`<br/>`<li>第四项</li>`<br/>`</ol>`|<ol><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ol>|
| `1. 第一项`<br/>`8. 第二项`<br/>`3. 第三项`<br/>`5. 第四项`  | `<ol>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项</li>`<br/>`<li>第四项</li>`<br/>`</ol>` | <ol><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ol> |
| `1. 第一项`<br/>`2. 第二项`<br/>`3. 第三项`<br/>`1. 缩进项`<br>`2. 缩进项`<br>`4. 第四项` | `<ol>`<br>`<li>第一项</li>`<br>`<li>第二项</li>`<br>`<li>第三项`<br>`<ol>`<br>`<li>缩进项</li>`<br>`<li>缩进项</li>`<br>`</ol>`<br>`</li>`<br>`<li>第五项</li>`<br>`</ol>` | <ol><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项<br/><ol><br/><li> 缩进项 </li><br/><li> 缩进项 </li><br/></ol><br/></li><br/><li> 第五项 </li><br/></ol> |

##### 常见错误 ❌

CommonMark 和其他一些轻量级标记语言允许您使用括号(`)`) 作为分隔符（例如，`1）第一项`），但并非所有 Markdown 应用程序都支持这一点，因此从兼容性的角度来看，这不是一个很好的选择。为了兼容性，请仅使用英文句点。

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `1. 第一项`<br>`2. 第二项` | `1) 第一项`<br>`2) 第二项` |

#### 无序列表

要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| `- 第一项`<br>`- 第二项`<br>`- 第三项`<br>`- 第四项`         | `<ul>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项</li>`<br/>`<li>第四项</li>`<br/>`</ul>` | <ul><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ul> |
| `* 第一项`<br>`* 第二项`<br>`* 第三项`<br>`* 第四项`         | `<ul>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项</li>`<br/>`<li>第四项</li>`<br/>`</ul>` | <ul><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ul> |
| `+ 第一项`<br>`+ 第二项`<br>`+ 第三项`<br>`+ 第四项`         | `<ul>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项</li>`<br/>`<li>第四项</li>`<br/>`</ul>` | <ul><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项 </li><br/><li> 第四项 </li><br/></ul> |
| `- 第一项`<br/>`- 第二项`<br/>`- 第三项`<br/>`- 缩进项`<br/>`- 缩进项`<br/>`- 第四项` | `<ul>`<br/>`<li>第一项</li>`<br/>`<li>第二项</li>`<br/>`<li>第三项`<br/>`<ul>`<br/>`<li>缩进项</li>`<br/>`<li>缩进项</li>`<br/>`</ul>`<br/>`</li>`<br/>`<li>第五项</li>`<br/>`</ul>` | <ul><br/><li> 第一项 </li><br/><li> 第二项 </li><br/><li> 第三项<br/><ul><br/><li> 缩进项 </li><br/><li> 缩进项 </li><br/></ul><br/></li><br/><li> 第五项 </li><br/></ul> |

##### 常见错误 ❌

Markdown 各应用对在同一列表中使用不同分隔符的处理方式并不统一。为保证兼容性，请不要在同一个列表里混用分隔符----选定一种并跟着用下去。

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `- 第一项`<br/>`- 第二项`<br/>`- 第三项`<br/>`- 第四项` | `+ 第一项`<br/>`* 第二项`<br/>`- 第三项`<br/>`+ 第四项` |

#### 在列表中嵌套其他元素

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符，如下例所示：

##### 段落

```text
*   这是第一个列表项。
*   这里是第二个列表项。

    我需要在第二个列表项下方添加另一个段落。

*   接着这是第三个列表项。
```

渲染效果如下：

- 这是第一个列表项

- 这里是第二个列表项。

  我需要在第二个列表项下方添加另一个段落。

- 接着这是第三个列表项。

##### 引用块

```text
*   这是第一个列表项。
*   这里是第二个列表项。

    > 在第二个列表项下方放一个引用块看起来不错。

*   接着这是第三个列表项。
```

渲染效果如下：

- 这是第一个列表项。

- 这里是第二个列表项。

  > 在第二个列表项下方放一个引用块看起来不错。

- 接着这是第三个列表项。

##### 代码块

[代码块](https://markdown.com.cn/basic-syntax/lists.html#code-blocks) 通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。

```text
1.  打开文件。
2.  在21行找到以下代码块：

        &lt;html>
          &lt;head>
            &lt;title>Test&lt;/title>
          &lt;/head>

3.  更新标题以匹配您的网站名称。
```

渲染效果如下：

1. 打开文件。

2. 在 21 行找到以下代码块：

   ```text
   &lt;html>
     &lt;head>
       &lt;title>Test&lt;/title>
     &lt;/head>
   ```

3. 更新标题以匹配您的网站名称。

##### 图片

```text
1.  打开包含 Linux 吉祥物的文件。
2.  为它的可爱惊叹不已。

    ![Tux, Linux 吉祥物](/assets/images/tux.png)

3.  关闭文件。
```

渲染效果如下：

1. 打开包含 Linux 吉祥物的文件。

2. 为它的可爱惊叹不已。

   ![Tux, the Linux mascot](data:image/png;base64,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)

3. 关闭文件。

##### 列表

你可以嵌套一个无序列表在一个有序列表中，或者反过来。

```text
1. 第一项
2. 第二项
3. 第三项
    - 缩进项
    - 缩进项
4. 第四项
```

渲染效果如下：

1. 第一项
2. 第二项
3. 第三项
   - 缩进项
   - 缩进项
4. 第四项

### Markdown 代码语法

要将单词或短语表示为代码，请将其包裹在反引号 (<code>`</code >)中。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| `在命令提示符中, 输入` nano `.` | `在命令提示符中, 输入 <code>nano</code>.` | 在命令提示符中, 输入 `nano`. |

#### 转义反引号

如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(<code>``</code >)中。

|Markdown 语法|HTML|预览效果|
| -----|-----|-------|
| ```使用 `code` 在你的Markdown文件中.``` | `<code>使用` code `在你的Markdown文件中.</code>` | `使用` code `在你的Markdown文件中.` |

#### 代码块

要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。

```text
    &lt;html>
      &lt;head>
      &lt;/head>
    &lt;/html>
```

渲染效果如下：

```text
&lt;html>
  &lt;head>
  &lt;/head>
&lt;/html>
```

**Note:** 要创建不用缩进的代码块，请使用 [围栏式代码块（fenced code blocks）](https://markdown.com.cn/extended-syntax/fenced-code-blocks.html).

### Markdown 分隔线语法

#### 示例 ✅

要创建分隔线，请在单独一行上使用三个或多个星号 (`***`)、破折号 (`---`) 或下划线 (`___`) ，并且不能包含其他内容。

```text
***

---

_________________
```

以上三个分隔线的渲染效果看起来都一样：

#### 常见错误 ❌

为了兼容性，请在分隔线的前后均添加空白行。

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `Try to put a blank line before...`<br>`---`<br>`...and after a horizontal rule.`<br />(译注: 请尝试在水平分隔线前后各空一行。) | `如果没有空行，这一行会被当作标题。`<br>`---`<br>`不要这样做!` |

**Note:** 三条连字符（`---`）前后必须留空行，否则它会被当成 Setext 标题的下划线，从而把上一行文字提升为二级标题。

### Markdown 链接语法

链接文本放在中括号内，链接地址放在后面的括号中，链接 title 可选。

超链接 Markdown 语法代码：`[超链接显示名](超链接地址 "超链接title")`

对应的 HTML 代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

```text
这是一个链接 [Markdown语法](https://markdown.com.cn)。
```

渲染效果如下：

这是一个链接 [Markdown 语法 (opens new window)](https://markdown.com.cn/)。

#### 给链接增加 Title

链接 title 是当鼠标悬停在链接上时会出现的文字，这个 title 是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。

```text
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```

渲染效果如下：

这是一个链接 [Markdown 语法 (opens new window)](https://markdown.com.cn/)。

#### 网址和 Email 地址

使用尖括号可以很方便地把 URL 或者 email 地址变成可点击的链接。

```text
<https://markdown.com.cn>
<fake@example.com>
```

渲染效果如下：

[https://markdown.com.cn(opens new window)](https://markdown.com.cn/)
        [fake@example.com](mailto:fake@example.com)

#### 带格式化的链接

[强调](https://markdown.com.cn/basic-syntax/links.html#emphasis) 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

```text
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```

渲染效果如下：

I love supporting the **[EFF (opens new window)](https://eff.org/)**.
This is the *[Markdown Guide (opens new window)](https://www.markdownguide.org/)*.
See the section on [`code`](https://markdown.com.cn/basic-syntax/links.html#code).

#### 引用类型链接

引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

##### 链接的第一部分格式

引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接。

尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。

以下示例格式对于链接的第一部分效果相同：

- `[hobbit-hole][1]`
- `[hobbit-hole] [1]`

##### 链接的第二部分格式

引用类型链接的第二部分使用以下属性设置格式：

1. 放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如`[label]:`）。
2. 链接的URL，可以选择将其括在尖括号中。
3. 链接的可选标题，可以将其括在双引号，单引号或括号中。

以下示例格式对于链接的第二部分效果相同：

- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'`
- `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'`
- `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)`

可以将链接的第二部分放在Markdown文档中的任何位置。有些人将它们放在出现的段落之后，有些人则将它们放在文档的末尾（例如尾注或脚注）。

#### 常见错误❌

不同的 Markdown 应用程序处理URL中间的空格方式不一样。为了兼容性，{% label请尽量使用%20代替空格。 red %}

| ✅ 这样做         | ❌ 不要这样做    |
| ---------------- | --------------- |
| `[link](https://www.example.com/my%20great%20page)` | `[link](https://www.example.com/my great page)` |

### Markdown 图片语法

要添加图像，请使用感叹号 (`!`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`。

对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`

```text
![这是图片](/assets/img/philly-magic-garden.jpg "Magic Gardens")
```

渲染效果如下：

![这是图片](https://markdown.com.cn/assets/img/philly-magic-garden.9c0b4415.jpg)

#### 链接图片

给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中

```text
[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)
```

渲染效果如下：

[![沙漠中的岩石图片](https://markdown.com.cn/assets/img/shiprock.c3b9a023.jpg)](https://markdown.com.cn/)

### Markdown 转义字符语法

要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符` \ `。

```text
\* 如果没有反斜杠，这将会是一个无序列表中的项目符号。
```

渲染效果如下：

\* 如果没有反斜杠，这将会是一个无序列表中的项目符号。

#### 可做转义的字符

以下列出的字符都可以通过使用反斜杠字符从而达到转义目的。

| 字符 | 名称                                                         |
| ---- | ------------------------------------------------------------ |
| \    | 反斜杠                                                       |
| `    | 反引号（另见[代码中转义反引号](https://markdown.com.cn/basic-syntax/escaping-characters.html#escaping-backticks)） |
| *    | 星号                                                         |
| _    | 下划线                                                       |
| { }  | 花括号                                                       |
| [ ]  | 括号                                                         |
| ( )  | 圆括号                                                       |
| #    | 井号                                                         |
| +    | 加号                                                         |
| -    | 减号（连字符）                                               |
| .    | 点                                                           |
| !    | 感叹号                                                       |
| \|   | 竖线（另见[表格中的竖线转义](https://markdown.com.cn/extended-syntax/escaping-pipe-characters-in-tables.html)） |

#### 特殊字符自动转义

在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&` 。 `<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 `&lt;` 和 `&amp`。

`&` 符号其实很容易让写作网页文件的人感到困扰，如果你要打「AT&T」 ，你必须要写成「`AT&amp;T`」 ，还得转换网址内的 `&` 符号，如果你要链接到：

```html
http://images.google.com/images?num=30&q=larry+bird
```

你必须要把网址转成：

```html
http://images.google.com/images?num=30&amp;q=larry+bird
```

才能放到链接标签的 `href` 属性里。不用说也知道这很容易忘记，这也可能是 HTML 标准检查所检查到的错误中，数量最多的。

Markdown 允许你直接使用这些符号，它帮你自动转义字符。如果你使用 `&` 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 `&amp;`。所以你如果要在文件中插入一个著作权的符号，你可以这样写：

```html
&copy;
```

Markdown 将不会对这段文字做修改，但是如果你这样写：

```html
AT&T
```

Markdown 就会将它转为：

```html
AT&amp;T
```

类似的状况也会发生在 `<` 符号上，因为 Markdown 支持 [行内 HTML](https://markdown.com.cn/basic-syntax/#内联-html) ，如果你使用 `<` 符号作为 HTML 标签的分隔符，那 Markdown 也不会对它做任何转换，但是如果你是写：

```html
4 < 5
```

Markdown 将会把它转换为：

```html
4 &lt; 5
```

需要特别注意的是，在 Markdown 的块级元素和内联元素中， `<` 和 `&` 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。（在 HTML 语法中，你要手动把所有的 `<` 和 `&` 都转换为 HTML 实体。）

### Markdown 内嵌 HTML 标签

对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

#### 行级內联标签

HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。依照个人习惯，甚至可以不用 Markdown 格式，而采用 HTML 标签来格式化。例如：如果比较喜欢 HTML 的 `<a>` 或 `<img>` 标签，可以直接使用这些标签，而不用 Markdown 提供的链接或是图片语法。当你需要更改元素的属性时（例如为文本指定颜色或更改图像的宽度），使用 HTML 标签更方便些。

HTML 行级內联标签和区块标签不同，在內联标签的范围内， Markdown 的语法是可以解析的。

```markdown
这个 **字** 是粗体的. 这个 <em>字</em> 是斜体的.
```

渲染效果如下:

这个 **字** 是粗体的. 这个 *字* 是斜体的.

#### 区块标签

区块元素──比如 `<div>`、`<table>`、`<pre>`、`<p>` 等标签，必须在前后加上空行，以便于内容区分。而且这些元素的开始与结尾标签，不可以用 tab 或是空白来缩进。Markdown 会自动识别这区块元素，避免在区块标签前后加上没有必要的 `<p>` 标签。

例如，在 Markdown 文件里加上一段 HTML 表格：

```markdown
这是一行普通的段落.

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

这是另一行普通的段落.
```

请注意，Markdown 语法在 HTML 区块标签中将不会被进行处理。例如，你无法在 HTML 区块内使用 Markdown 形式的`*强调*`。

#### HTML 用法最佳实践

出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML。如有疑问，请查看相应 Markdown 应用程序的手册。某些应用程序只支持 HTML 标签的子集。

对于 HTML 的块级元素 `<div>`、`<table>`、`<pre>` 和 `<p>`，请在其前后使用空行（blank lines）与其它内容进行分隔。尽量不要使用制表符（tabs）或空格（spaces）对 HTML 标签做缩进，否则将影响格式。

在 HTML 块级标签内不能使用 Markdown 语法。例如 `<p>italic and **bold**</p>` 将不起作用。

## Markdown拓展语法

### Markdown 拓展语法入门

John Gruber的原始设计文档中概述的[基本语法](https://markdown.com.cn/basic_syntax)主要是为了应付大多数情况下的日常所需元素，但对于某些人来说还不够，这就是扩展语法的用武之地。

一些个人和组织开始通过添加其他元素（例如表，代码块，语法突出显示，URL自动链接和脚注）来扩展基本语法。可以通过使用基于基本Markdown语法的轻量级标记语言，或通过向兼容的Markdown处理器添加扩展来启用这些元素。

### Markdown 扩展语法可用性

并非所有Markdown应用程序都支持扩展语法元素。您需要检查您的应用程序所使用的轻量级标记语言是否支持您要使用的扩展语法元素。如果没有，那么仍然有可能在Markdown处理器中启用扩展。

#### 轻量标记语言

有几种轻量级标记语言是Markdown的超集。它们包含Gruber的基本语法，并通过添加其他元素（例如表，代码块，语法突出显示，URL自动链接和脚注）在此基础上构建。许多最受欢迎的Markdown应用程序使用以下轻量级标记语言之一：

- [CommonMark(opens new window)](https://commonmark.org/)
- [GitHub Flavored Markdown (GFM)(opens new window)](https://github.github.com/gfm/)
- [Markdown Extra(opens new window)](https://michelf.ca/projects/php-markdown/extra/)
- [MultiMarkdown(opens new window)](https://fletcherpenney.net/multimarkdown/)
- [R Markdown](https://rmarkdown.rstudio.com/)

#### Markdown 处理器

有许多[Markdown处理器 (opens new window)](https://github.com/markdown/markdown.github.com/wiki/Implementations)可用。它们中的许多允许您添加启用扩展语法元素的扩展。查看您所使用处理器的文档以获取更多信息

### Markdown 表格

要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

```markdown
| 语法         | 描述        |
| ----------  | ----------  |
| 标头         | 标题        |
| 段落         | 文本        |
```

呈现的输出如下所示：

| 语法 | 描述 |
| :--- | :--- |
| 标头 | 标题 |
| 段落 | 文本 |

单元格宽度可以变化，如下所示。呈现的输出将看起来相同。

```markdown
| 语法 | 描述 |
| --- | ----------- |
| 标头 | 标题 |
| 段落 | 文本 |
```

**Tip:** 使用连字符和管道创建表可能很麻烦。为了加快该过程，请尝试使用[Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)。使用图形界面构建表，然后将生成的Markdown格式的文本复制到文件中。

#### 对齐

您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。

```text
| 语法         | 描述        | 测试文本       |
| :---        |  :----:     |          ---: |
| 标头         | 标题        |    这个是      |
| 段落         | 文本        |       更多     |
```

呈现的输出如下所示：

| 语法 | 描述 | 测试文本 |
| :--- | :--: | -------: |
| 标头 | 标题 |   这个是 |
| 段落 | 文本 |     更多 |

#### 格式化表格中的文字

您可以在表格中设置文本格式。例如，您可以添加链接，代码（仅反引号（<code>`</code>）中的单词或短语，而不是代码块）和强调。

您不能添加标题，块引用，列表，水平规则，图像或HTML标签。

#### 在表中转义管道字符

您可以使用表格的HTML字符代码（`&#124;`）在表中显示竖线（`|`）字符。

### Markdown 围栏代码块

Markdown基本语法允许您通过将行缩进四个空格或一个制表符来创建代码块。如果发现不方便，请尝试使用受保护的代码块。根据Markdown处理器或编辑器的不同，您将在代码块之前和之后的行上使用三个反引号（<code>```</code>）或三个波浪号（<code>~~~</code>）。

````markdown
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

呈现的输出如下所示：

```markdown
{ 
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

**Tip:**要在代码块中显示反引号？请参阅了解如何[转义](https://markdown.com.cn/basic-syntax/escaping-backticks.html)它们。

#### 语法高亮

许多Markdown处理器都支持受围栏代码块的语法突出显示。使用此功能，您可以为编写代码的任何语言添加颜色突出显示。要添加语法突出显示，请在受防护的代码块之前的反引号旁边指定一种语言。

````markdown
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

呈现的输出如下所示：

{ "firstName": "John", "lastName": "Smith", "age": 25 }

### Markdown 脚注

脚注使您可以添加注释和参考，而不会使文档正文混乱。当您创建脚注时，带有脚注的上标数字会出现在您添加脚注参考的位置。读者可以单击链接以跳至页面底部的脚注内容。

要创建脚注参考，请在方括号（"<code>[^1]</code>"）内添加插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。

在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本（"<code>[^1]: My footnote.</code>"）。您不必在文档末尾添加脚注。您可以将它们放在除列表，块引号和表之类的其他元素之外的任何位置。

```markdown
这里有一个简单的脚注,[^1] 还有一个更长的脚注.[^bignote]

[^1]: 这是第一个脚注.

[^bignote]: 这是一个包含多个段落和代码的脚注.

缩进段落以包含它们在脚注中.

`{ my code }`

尽你所愿,可以添加更多的段落.
```

呈现的输出如下所示：

这里有一个简单的脚注,[^1] 还有一个更长的脚注.[^bignote]

[^1]: 这是第一个脚注
[^bignote]: 这是一个包含多个段落和代码的例子。

```markdown
缩进段落以将它们包含在脚注中。.

`{ my code }`

尽你所愿,可以添加更多的段落.
```

### Markdown 标题编号

许多Markdown处理器支持[标题](https://markdown.com.cn/basic-syntax/headings.html)的自定义ID - 一些Markdown处理器会自动添加它们。添加自定义ID允许您直接链接到标题并使用CSS对其进行修改。要添加自定义标题ID，请在与标题相同的行上用大括号括起该自定义ID。

```markdown
### My Great Heading {#custom-id}
```

HTML看起来像这样：

```html
<h3 id="custom-id">My Great Heading</h3>
```

#### 链接到标题ID (#headid)

通过创建带有数字符号（`#`）和自定义标题ID的[标准链接]((/basic-syntax/links.HTML)，可以链接到文件中具有自定义ID的标题。

| Markdown                      | HTML                                     | 预览效果                                                     |
| ----------------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| `[Heading IDs](#heading-ids)` | `<a href="#heading-ids">Heading IDs</a>` | [Heading IDs](https://markdown.com.cn/extended-syntax/heading-ids.html#heading-ids) |

其他网站可以通过将自定义标题ID添加到网页的完整URL（例如`[Heading IDs](https://markdown.com.cn/extended-syntax/heading-ids.html#headid)`）来链接到标题。

### Markdown 定义列表

一些Markdown处理器允许您创建术语及其对应定义的定义列表。要创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义。

```markdown
第一术语 
: 这是第一术语的定义.

第二术语
: 这是第二术语的其中一个定义.
: 这是第二术语的另一个定义.
```

HTML看起来像这样：

```html
<dl>
  <dt>第一术语</dt>
  <dd>这是第一术语的定义.</dd>
  <dt>第二术语</dt>
  <dd>这是第二术语的其中一个定义. </dd>
  <dd>这是第二术语的另一个定义.</dd>
</dl>
```

呈现的输出如下所示：

<dl>
  <dt>第一术语</dt>
  <dd>这是第一术语的定义.</dd>
  <dt>第二术语</dt>
  <dd>这是第二术语的其中一个定义. </dd>
  <dd>这是第二术语的另一个定义.</dd>
</dl>

### Markdown 删除线

您可以通过在单词中心放置一条水平线来删除单词。结果看起来像这样。此功能使您可以指示某些单词是一个错误，要从文档中删除。若要删除单词，请在单词前后使用两个波浪号`~~`。

```text
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```

呈现的输出如下所示：

<S>世界是平坦的。</S> 我们现在知道世界是圆的。

### Markdown 任务列表语法

任务列表使您可以创建带有复选框的项目列表。在支持任务列表的Markdown应用程序中，复选框将显示在内容旁边。要创建任务列表，请在任务列表项之前添加破折号`-`和方括号`[ ]`，并在`[ ]`前面加上空格。要选择一个复选框，请在方括号`[x]`之间添加 x 。

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

呈现的输出如下所示：

![Markdown 任务列表](https://markdown.com.cn/assets/img/tasklist.eadf400e.png)

### Markdown 使用 Emoji 表情

有两种方法可以将表情符号添加到Markdown文件中：将表情符号复制并粘贴到Markdown格式的文本中，或者键入*emoji shortcodes*。

#### 复制和粘贴表情符号

在大多数情况下，您可以简单地从[Emojipedia](https://emojipedia.org/)等来源复制表情符号并将其粘贴到文档中。许多Markdown应用程序会自动以Markdown格式的文本显示表情符号。从Markdown应用程序导出的HTML和PDF文件应显示表情符号。

**Tip**: 如果您使用的是静态网站生成器，请确保将HTML页面编码为UTF-8。

#### 使用表情符号简码

一些Markdown应用程序允许您通过键入表情符号短代码来插入表情符号。这些以冒号开头和结尾，并包含表情符号的名称。

```markdown
去露营了！ :tent: 很快回来。
真好笑！ :joy:
```

呈现的输出如下所示：

去露营了！⛺很快回来。

真好笑！😂

**Note**：您可以使用此[表情符号简码列表](https://gist.github.com/rxaviers/7360908)，但请记住，表情符号简码因应用程序而异。有关更多信息，请参阅Markdown应用程序的文档。

### 自动网址链接

许多Markdown处理器会自动将URL转换为链接。这意味着如果您输入<http://www.example.com，即使您未[使用方括号>](<https://markdown.com.cn/basic-syntax/links.html)，您的Markdown处理器也会自动将其转换为链接。>

```text
http://www.example.com
```

呈现的输出如下所示：

[http://www.example.com](http://www.example.com/)

#### 禁用自动URL链接

如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接。

```text
`http://www.example.com`
```

呈现的输出如下所示：

`http://www.example.com`

## Markdown语法变通

### 概述

大多数使用Markdown的人会发现，基础语法和扩展语法已能满足需求。但如果您长期使用Markdown，可能会发现某些必要功能确实缺失。本文提供了一些绕过Markdown限制的技巧。针对Markdown官方不支持的某些功能的替代解决方案。

💡 重要提示：这些变通方法不能保证在所有Markdown应用中生效。如需频繁使用这些技巧，建议考虑改用其他标记语言。

### Markdown 下划线

Markdown 原生不支持下划线，可能是因为网页文本中的下划线通常表示超链接。然而，在写论文或报告时，可能需要使用下划线。一些应用（如 Bear 和 Simplenote）支持文本下划线，但如果你的 Markdown 处理器支持 HTML，可以使用 `<ins>`标签：

```text
一些文字 <ins>将被加下划线</ins>。
```

渲染效果：
一些文字 <ins>将被加下划线</ins>。

### Markdown 缩进（Tab)

Markdown 里的空格和制表符有特殊用途，比如创建换行或代码块。如果你想用 Tab 缩进段落，可以尝试以下方法：

```text
&nbsp;&nbsp;&nbsp;&nbsp;这是一个缩进的段落。
```

渲染效果:
&nbsp;&nbsp;&nbsp;&nbsp;这是一个缩进的段落。

### Markdown 文字居中

Markdown 没有文本对齐的语法，但可以使用 HTML 标签 `<center>`（已废弃）或 CSS 解决：

```text
<p style="text-align:center">这段文字居中显示。</p>
```

渲染效果：


<p style="text-align:center">这段文字居中显示。</p>

### Markdown 文字颜色

Markdown 不支持更改文字颜色，但 HTML 可以：

```text
<font color="red">这段文字是红色的！</font>
<p style="color:blue">这段文字是蓝色的。</p>
```

渲染效果：

<font color="red">这段文字是红色的！</font>

<p style="color:blue">这段文字是蓝色的。</p>

### Markdown 注释

Markdown 没有内置的注释功能，但可以使用一种非官方的 Hack 方法：

```text
这是可见的段落。

[这是一个隐藏的注释]: # 

这是另一个可见的段落。
```

渲染效果：

这是可见的段落。


这是另一个可见的段落。

### Markdown 警告

Markdown 没有警告框功能，但可以使用引用块（>）+ Emoji + 加粗模拟：

```markdown
> :warning: **警告：** 不要按下大红色按钮！

> :memo: **注意：** 日出很美。

> :bulb: **提示：** 记得珍惜生活中的小事。
```

渲染效果：


> :warning: **警告：** 不要按下大红色按钮！
>
> :memo: **注意：** 日出很美。
>
> :bulb: **提示：** 记得珍惜生活中的小事。

### Markdown 调整图片大小

Markdown 不能指定图片尺寸，但可以用 HTML 设定宽高：

```text
<img src="/images/rocks.jpg" width="200" height="100">
```

渲染效果：

图片将以 200x100 像素显示。

<img src="https://markdown.com.cn/images/rocks.jpg" width="200" height="100">

### Markdown 图片标题

Markdown 没有图片标题（Caption），可以使用 HTML 的 `<figure>` 和 `<figcaption>`：

```text
<figure>
    <img src="/images/rocks.jpg" alt="描述文本">
    <figcaption>这是一张描述图片。</figcaption>
</figure>
```

或者使用 Markdown 变通方法：

```text
![描述文本](/images/rocks.jpg)  
*这是一张描述图片。*
```

渲染效果：

<figure>
    <img src="https://markdown.com.cn/images/rocks.jpg" alt="描述文本">
    <figcaption>这是一张描述图片。</figcaption>
</figure>

### Markdown 新标签打开链接

Markdown 不能指定 target="_blank"，但 HTML 可以：

```text
<a href="https://markdown.com.cn" target="_blank">学习 Markdown！</a>
```

渲染效果：

<a href="https://markdown.com.cn" target="_blank">学习 Markdown！</a>

### Markdown 符号（特殊字符）

Markdown 不能直接插入特殊符号，但可以复制粘贴，或者使用 HTML 实体：

```text
版权 (©) — &copy;
注册商标 (®) — &reg;
商标 (™) — &trade;
欧元 (€) — &euro;
左箭头 (←) — &larr;
上箭头 (↑) — &uarr;
右箭头 (→) — &rarr;
下箭头 (↓) — &darr;
度数 (°) — &#176;
圆周率 (π) — &#960;
```

渲染效果：

版权 (©) — &copy;
注册商标 (®) — &reg;
商标 (™) — &trade;
欧元 (€) — &euro;
左箭头 (←) — &larr;
上箭头 (↑) — &uarr;
右箭头 (→) — &rarr;
下箭头 (↓) — &darr;
度数 (°) — &#176;
圆周率 (π) — &#960;

### Markdown 表格格式

Markdown 不能直接在表格中换行或插入列表，但可以用 HTML 解决：

#### 表格内换行

```text
| 语法      | 描述         |
| --------- | ----------- |
| 换行      | 第一段。<br><br>第二段。 |
```

#### 表格内列表

```text
| 语法      | 描述         |
| --------- | ----------- |
| 列表      | <ul><li>项目一</li><li>项目二</li></ul> |
```

渲染效果：


| 语法      | 描述         |
| --------- | ----------- |
| 换行      | 第一段。<br><br>第二段。 |

| 语法 | 描述                                    |
| ---- | --------------------------------------- |
| 列表 | <ul><li>项目一</li><li>项目二</li></ul> |

#### Markdown 目录

某些 Markdown 解析器支持自动目录生成（如 Markdeep），但如果不支持，可以手动创建：

```text
#### 目录  
- [下划线](#markdown-下划线)  
- [缩进](#markdown-缩进-tab)  
- [居中对齐](#markdown-文字居中)  
- [更改文字颜色](#markdown-文字颜色) 
```

渲染效果：

<h4 id="目录"><a href="#目录" class="header-anchor">#</a> 目录</h4>

<ul>
<li><a href="#markdown-%E4%B8%8B%E5%88%92%E7%BA%BF">下划线</a></li>
<li><a href="#markdown-%E7%BC%A9%E8%BF%9B-tab">缩进</a></li>
<li><a href="#markdown-%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD">居中对齐</a></li>
<li><a href="#markdown-%E6%96%87%E5%AD%97%E9%A2%9C%E8%89%B2">更改文字颜色</a></li>
</ul>

#### Markdown 插入视频

Markdown 不能直接嵌入视频，但可以使用 HTML，或变通方式（图片+链接）
点击B站的分享图标，然后选择嵌入链接，会获得如下代码：

```text
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=114201066479129&bvid=BV1GPX1YpErE&cid=28993847393&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

或者

```text
[![视频预览](https://img.youtube.com/vi/YOUTUBE-ID/0.jpg)](https://www.youtube.com/watch?v=YOUTUBE-ID)
```

渲染效果：

<iframe src="//player.bilibili.com/player.HTML?isOutside=true&aid=114201066479129&bvid=BV1GPX1YpErE&cid=28993847393&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

Markdown 作为轻量级标记语言，有一定的局限性，但借助 HTML 和 CSS，可以实现许多 Markdown 不支持的功能。希望这些技巧能帮助你更高效地使用 Markdown！ 🚀

---
> 文章完整性测试标记（此内容应显示在末尾）