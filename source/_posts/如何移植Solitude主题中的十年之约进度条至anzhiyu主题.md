---
title: 如何移植Solitude主题中的十年之约进度条至anzhiyu主题
categories: 主题
tags:
  - Hexo
  - anzhiyu
  - 主题修改
locate: 南宁
cover: >-
  https://blog-image-1302787555.cos.ap-guangzhou.myqcloud.com//img%E5%AD%A6%E9%99%A2-%E6%99%A8.webp
abbrlink: '5498433'
summary: >-
  这篇文章详细介绍了如何将Solitude主题中的十年之约进度条移植到Anzhiyu主题中，强调了修改前的备份和编辑器选择的重要性。文章分步骤指导了新建tenyear.pug和tenyear.styl文件，并提供了具体的代码内容，包括进度条的样式和功能实现。同时，说明了如何修改about.pug文件以插入进度条模块，并适配主题颜色和暗色模式。整个过程注重细节和兼容性，适合有一定主题修改经验的用户参考。
date: 2025-06-30 01:04:01
swiper_index: 1
top_group_index: 1
---

{% note flat %}

进行主题修改前必看

- 博客魔改有风险，请务必<b>备份</b>你的`原代码`

- 因为`.pug`和`.styl`以及`.yml`等对缩进要求较为严格，请尽量**不要使用记事本等无法提供语法高亮的文本编辑器**进行修改。

- 本文涉及修改内容会以<b>diff代码块</b>进行标识,复制时<b>请不要忘记删除</b>前面的`+,-`符号

- 本帖基于`Anzhiyu主题`进行修改方案编写，因此请读者优先掌握[Anzhiyu主题官方文档](https://docs.anheyu.com/)的内容后再来进行魔改。

  {% endnote %}

{% folding red, 文章更新日志 %}
{% timeline 2025,red %}
<!-- timeline 06-30 -->
初稿
<!-- endtimeline -->
<!-- timeline 08-25 -->
修改`tenyear.pug`模块日期的显示逻辑,避免由于系统语言等因素影响
<!-- endtimeline -->

{% endtimeline %}
{% endfolding %}

## 前言

在逛[Mo的记事簿](https://blog.xiowo.net/)大佬的博客时,~~本着偷窥人家隐私为目的~~,去看看大佬的设计时,发现之前用着Solitude主题时候一个设计比较美丽的进度条--`十年之约`

![来源 Mo的记事簿](https://blog-image-1302787555.cos.ap-guangzhou.myqcloud.com//imgimage-20250630105906218.png)

随后我也想着要不把这个进度条搬过来吧,就安置在原Solitude主题的模块位置--`关于`页面中间处,说干就干,之前琢磨这么久的主题不就是为了~~偷代码~~学习嘛

## 修改

{% folding cyan open, 以下内容涉及的文件 %}

- about.pug(重点备份)
- tenyear.pug(新建)
- tenyear.styl(新建)

{% endfolding %}

1. 首先需要决定<b>十年之约</b>模块的运作方式,路径`anzhiyu>layout>includes>widget`,新建`tenyear.pug`文件

{% tip key %}自8月25日后,tenyear.pug的代码逻辑已修改,之前已部署的请自行修改为后面的内容,往后的可以忽略本条提示,放心部署{% endtip %}

{% folding cyan,6月30日的内容 已作废 %}

`tenyear.pug`的内容如下:

```pug
- var tenyear = site.data.about.tenyear
if tenyear
    .author-content#tenyear
        .create-site-post.author-content-item.single
            .author-content-item-tips= tenyear.tips
            .author-content-item-title= tenyear.title
            p= tenyear.text
            .tenyear-timeline
                .progress
                .past-time
                .percentage-label
            .time-labels
                .start-time#tenyear-start-time= new Date(tenyear.start).toLocaleDateString()
                .end-time#tenyear-end-time= new Date(tenyear.end).toLocaleDateString()

    script.
        function updateTenYearProgress() {
            let progressElement = document.querySelector(".progress");
            let pastTimeElement = document.querySelector(".past-time");
            let percentageLabelElement = document.querySelector(".percentage-label");
            let startTimeElement = document.getElementById("tenyear-start-time");
            let endTimeElement = document.getElementById("tenyear-end-time");
            let startTime = new Date(startTimeElement.textContent).getTime();
            let endTime = new Date(endTimeElement.textContent).getTime();

            const currentTime = new Date().getTime();
            const progress = ((currentTime - startTime) / (endTime - startTime) * 100);
            const progressPercentage = Math.min(progress, 100) + "%";

            pastTimeElement.style.setProperty("--past-time-percentage", progress + "%");
            progressElement.style.setProperty("--progress-percentage", progressPercentage);
            if (progress > 5) {
                percentageLabelElement.textContent = `${progress.toFixed(0)}%`;
                percentageLabelElement.style.left = `calc(${progress}% - 35px)`;
            }

            percentageLabelElement.style.visibility = "visible";
        }

        if (document.getElementById("tenyear")) {
            updateTenYearProgress();
        }
```
{% endfolding %}

{% folding blue open, 8月25日内容 请部署这一部分 %}

`tenyear.pug`内容如下,相比于初版,修改了几处内容:

- 通过`formatDate()` 函数  在 Pug 渲染阶段将日期格式化成 `YYYY/M/D`的形式，这样设置的显示不会受系统语言影响,上一个版本会有概率形成`M/D/YYYY`
- `new Date(startTimeElement.textContent)`修改为`new Date(startTimeElement.dataset.date)`

```pug
- var tenyear = site.data.about.tenyear
- function formatDate(dateStr) {
-   const d = new Date(dateStr);
-   return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
- }

if tenyear
    .author-content#tenyear
        .create-site-post.author-content-item.single
            .author-content-item-tips= tenyear.tips
            .author-content-item-title= tenyear.title
            p= tenyear.text
            .tenyear-timeline
                .progress
                .past-time
                .percentage-label
            .time-labels
                .start-time#tenyear-start-time(data-date=tenyear.start)= formatDate(tenyear.start)
                .end-time#tenyear-end-time(data-date=tenyear.end)= formatDate(tenyear.end)

    script.
        function updateTenYearProgress() {
            let progressElement = document.querySelector(".progress");
            let pastTimeElement = document.querySelector(".past-time");
            let percentageLabelElement = document.querySelector(".percentage-label");
            let startTimeElement = document.getElementById("tenyear-start-time");
            let endTimeElement = document.getElementById("tenyear-end-time");

            let startTime = new Date(startTimeElement.dataset.date).getTime();
            let endTime = new Date(endTimeElement.dataset.date).getTime();

            const currentTime = new Date().getTime();
            const progress = ((currentTime - startTime) / (endTime - startTime) * 100);
            const progressPercentage = Math.min(progress, 100) + "%";

            pastTimeElement.style.setProperty("--past-time-percentage", progress + "%");
            progressElement.style.setProperty("--progress-percentage", progressPercentage);
            if (progress > 5) {
                percentageLabelElement.textContent = `${progress.toFixed(0)}%`;
                percentageLabelElement.style.left = `calc(${progress}% - 35px)`;
            }

            percentageLabelElement.style.visibility = "visible";
        }

        if (document.getElementById("tenyear")) {
            updateTenYearProgress();
        }
```
{% endfolding %}


2. 决定完模块运作方式还需要定义模块样式.路径`anzhiyu>source>css>_page`下新建`tenyear.styl`

`tenyear.styl`内容如下:

```stylus
.percentage-label
  position absolute
  left 0
  font-size 14px
  color var(--anzhiyu-card-bg)
  font-weight bold
  top 10px
  white-space nowrap
  transition left 0.5s linear
  visibility hidden

.time-labels
  display flex
  justify-content space-between
  width 100%

  > div
    font-size 14px
    color var(--anzhiyu-fontcolor)

.tenyear-timeline
  width 100%
  background-color var(--anzhiyu-background)
  position relative
  overflow hidden
  margin-bottom 20px
  border-radius 0.5rem
  height 2.5rem

.progress
  width 0
  height 100%
  background-color #f25d8e
  position absolute
  animation-delay -0.1s
  border-radius 0.5rem
  animation renamedProgressAnimation 2s linear forwards

.past-time
  animation renamedPastTimeAnimation 3s linear forwards
  width 2px
  height 20px
  position absolute
  transform-origin left

@keyframes renamedProgressAnimation
  0%
    width 0
  100%
    width var(--progress-percentage, 0)

@keyframes renamedPastTimeAnimation
  0%
    transform scaleX(0)
  100%
    transform scaleX(var(--past-time-percentage, 0))
```

其中`.process.background-color`是进度条前半的颜色,即达到进度.我在此处修改为了`#f25d8e`粉红色,与打赏按钮的颜色一致.

`.tenyear-timeline.background-color`为进度条后半的颜色,即剩余进度.我在此处修改为了`var(--anzhiyu-background)`安知鱼的背景颜色,主要是为了适配暗色模式,如果单纯的设计为白色,会导致暗色模式下进度条后半为白色,~~瞎眼~~剩余可修改样式可以自行琢磨,基本只用修改这两处,

颜色适配方面,因为我用不到其他的颜色修改与字体大小,所以我将颜色`原var(--efu--color--)`修改为了`var(--anzhiyu--color)`,主要是efu的颜色未定义,需要做出修改,加之我的技术力也不允许我进行修改.

3. 路径`anzhiyu>layout>includes>page>about.pug`需要做出三处修改.内容修改如下:

   顶部判定条件加入,

   ```diff
   if site.data.about
     - let aboutData = site.data.about
     each item in aboutData
       - let subtitle = item.subtitle || config.subtitle
       - let avatarImg = item.avatarImg || theme.avatar.img
       - let aboutName = item.name || theme.author
       - let aboutDescription = item.description || config.description
       - let helloAbout = item.helloAbout
       - let skillsTips = item.skillsTips
       - let careers = item.careers
       - let crrList = careers.list
       - let crrItem = careers.item
       - let avatarSkills = item.avatarSkills
   +    - let tenyear = item.tenyear
   ```

   

添加`tenyear模块`,这里我选择放置在打赏模块与音乐喜好模块之间,

```diff
              .tips=`跟 ${aboutName} 一起欣赏更多音乐`
            .banner-button-group
              a.banner-button(onclick=`pjax.loadUrl("${music_link}")`)
                i.anzhiyufont.anzhiyu-icon-arrow-circle-right
                |  
                span.banner-button-text 更多推荐
+      // ✅ 添加 Tenyear 模块
+      if tenyear
+        .author-content#tenyear
+          .create-site-post.author-content-item.single
+            .author-content-item-tips= tenyear.tips
+            .author-content-item-title= tenyear.title
+            p= tenyear.text
+            .tenyear-timeline
+              .progress
+              .past-time
+              .percentage-label
+            .time-labels
+              .start-time#tenyear-start-time= new Date(tenyear.start).toLocaleDateString()
+              .end-time#tenyear-end-time= new Date(tenyear.end).toLocaleDateString()

      if page.content
        .author-content
          .create-site-post.author-content-item.single
            != page.content
```

进度函数,

8-25留 之前对这一部分缺少了介绍,这一部分内容其实就是脚本的运行计算逻辑,所以你需要注意的是将本内容添加至`script(*defer*).`的后方,我的建议是直接甩在全内容的最后方,只需要注意缩进即可

```diff
+                // ✅ 十年之约进度函数
+          function updateTenYearProgress() {
+            let progressElement = document.querySelector(".progress");
+            let pastTimeElement = document.querySelector(".past-time");
+            let percentageLabelElement = document.querySelector(".percentage-label");
+            let startTimeElement = document.getElementById("tenyear-start-time");
+            let endTimeElement = document.getElementById("tenyear-end-time");

+            if (!startTimeElement || !endTimeElement) return;

+            let startTime = new Date(startTimeElement.textContent).getTime();
+            let endTime = new Date(endTimeElement.textContent).getTime();
+            const currentTime = new Date().getTime();
+            const progress = ((currentTime - startTime) / (endTime - startTime) * 100);
+            const progressPercentage = Math.min(progress, 100) + "%";

+            pastTimeElement.style.setProperty("--past-time-percentage", progress + "%");
+            progressElement.style.setProperty("--progress-percentage", progressPercentage);

+            if (progress > 5) {
+              percentageLabelElement.textContent = `${progress.toFixed(0)}%`;
+              percentageLabelElement.style.left = `calc(${progress}% - 35px)`;
+            }

+            percentageLabelElement.style.visibility = "visible";
+          }

+          if (document.getElementById("tenyear")) {
+            updateTenYearProgress();
+          }
```

4.模块开关,路径`source>_data>about.yml`添加,

```yml
  tenyear:
    enable: true # 十年之约开关，true为显示，false为隐藏
    tips: 十年之约
    title: 寻找更合适的自己。
    start: 2022/05/28
    end: 2032/05/28
```

我选择放置在打赏模块之上.

最后三连即可见.