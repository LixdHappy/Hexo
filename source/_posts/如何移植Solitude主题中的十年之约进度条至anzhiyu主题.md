---
title: 如何移植Solitude主题中的十年之约进度条至anzhiyu主题
swiper_index: 3
top_group_index: 3
tags:
  - Hexo
  - anzhiyu
  - 主题修改
locate: 南宁
cover: >-
  https://blog-image-1302787555.cos.ap-guangzhou.myqcloud.com//img%E5%AD%A6%E9%99%A2-%E6%99%A8.webp
abbrlink: '5498433'
ai: >-
  这里是GB的AI，这篇文章详细介绍了如何将Solitude主题中的"十年之约"进度条功能移植到Anzhiyu主题中。文章首先强调了修改前的注意事项，包括备份原代码和使用合适的代码编辑器。主要内容分为三个部分：1)
  新建tenyear.pug文件定义进度条的功能逻辑，包含时间计算和显示逻辑；2)
  创建tenyear.styl文件定义进度条的样式，包括颜色、动画效果等；3)
  修改about.pug文件，在关于页面中插入进度条模块。文章提供了完整的代码示例，并解释了关键部分的修改要点，如颜色适配、进度条位置等，帮助读者顺利完成主题功能的移植。
date: 2025-06-30 01:04:01
---

{% note flat %}

进行主题修改前必看

- 博客魔改有风险，请务必<b>备份</b>你的`原代码`

- 因为`.pug`和`.styl`以及`.yml`等对缩进要求较为严格，请尽量**不要使用记事本等无法提供语法高亮的文本编辑器**进行修改。

- 本文涉及修改内容会以<b>diff代码块</b>进行标识,复制时<b>请不要忘记删除</b>前面的`+,-`符号

- 本帖基于`Anzhiyu主题`进行修改方案编写，因此请读者优先掌握[Anzhiyu主题官方文档](https://docs.anheyu.com/)的内容后再来进行魔改。

  {% endnote %}

## 前言

在逛[Mo的记事簿](https://blog.xiowo.net/)大佬的博客时,~~本着偷窥人家隐私为目的~~,去看看大佬的设计时发现之前用着Solitude主题时候一个设计比较美丽的进度条--`十年之约`

![来源 Mo的记事簿](https://blog-image-1302787555.cos.ap-guangzhou.myqcloud.com//imgimage-20250630105906218.png)

随后我也想着要不把这个进度条搬过来吧,就安置在原Solitude主题的模块位置--`关于`,说干就干,之前琢磨这么久的主题不就是为了~~偷代码~~学习嘛

## 修改

{% folding cyan open, 以下内容涉及的文件 %}

- about.pug(重点备份)
- tenyear.pug(新建)
- tenyear.styl(新建)

{% endfolding %}

1. 首先需要决定<b>十年之约</b>模块的运作方式,路径`anzhiyu>layout>includes>widget>tenyear.pug`,新建`tenyear.pug`文件

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

2. 决定完模块运作方式还需要确定它的样子.路径`anzhiyu>source>css>_page>tenyear.styl`下新建`tenyear.styl`

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

   ```pug
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

```pug
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

```pug
            selfInfoContentYearUp();
            statisticUP()
          });

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
          

        var pursuitInterval = null;
        pursuitInterval = setInterval(function () {
          const show = document.querySelector("span[data-show]");
          const next = show.nextElementSibling || document.querySelector(".first-tips");
          const up = document.querySelector("span[data-up]");
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