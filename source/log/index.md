---
title: 网站日志
date: 2025-06-29 11:57:05
top_img: false
---



{% tip info %}网站运行日志,纯手工记录{% endtip %}


<div class="timeline-container"> <!-- 添加容器解决错位问题 -->


{% timeline 2025,blue %}

<!-- timeline 08-20 -->

迫于结识各位大佬的现实需求,将简陋的友情页面进行了一番美化与修正。

所以本次优化的是 [友情链接](https://blog.gbfun.cc/link/)的展示样式

<!-- endtimeline -->

<!-- timeline 08-19 -->

完善 AI概述 的样式定义以及生成逻辑

<!-- endtimeline -->

<!-- timeline 08-03 -->

自动部署逻辑 完善

{% folding yellow, 优化项目 %}

- **每 12 小时自动部署一次**（定时任务）

- **加入保活逻辑**（`gh-workflow-keepalive`）

- **部署失败自动重试 3 次**

{% endfolding %}

<!-- endtimeline -->

<!-- timeline 08-02 -->

优化 页脚站点状态检测 的逻辑

<!-- endtimeline -->

<!-- timeline 08-01 -->

等待网安备案,优化`相册集`页面

<!-- endtimeline -->

<!-- timeline 07-31 -->

优化页脚样式

<!-- endtimeline -->

<!-- timeline 07-29 -->

网站备案通过,重新开放(广西备案速度还算可以),备案号: `桂ICP备2025067806号-1`

<!-- endtimeline -->

<!-- timeline 07-23 -->

网站备案期间,博客暂停解析

<!-- endtimeline -->

<!-- timeline 07-21 -->
移除  banner-button动画样式(bug太多且难以修复)
<!-- endtimeline -->
<!-- timeline 07-19 -->

- 加入 仿Solitude底部站点名字附带头像
- 对 banner-button添加动画样式[来自SNTube Studio站点](https://satera.cn/update/)

<!-- endtimeline -->
<!-- timeline 07-18 -->

添加 右下角联系方式悬浮球

<!-- endtimeline -->

<!-- timeline 07-17 -->

- 修改 邮件回复通知模板

- 添加 右侧栏的时钟显示

{% note success simple %}fix 修复 `由解析配置错误导致的评论区评论失效问题`{% endnote %}

<!-- endtimeline -->

<!-- timeline 07-15 -->

修改 字数统计单位由K改为W

修改 自动部署代码逻辑

<!-- endtimeline -->

<!-- timeline 07-14 -->

{% note success simple %}fix `修复 由CDN配置错误导致的崩站错误`{% endnote %}

{% note success simple %}fix `修复 站点检测DNS问题`{% endnote %}

{% note success simple %}fix `修复 钓鱼(朋友圈)间接性失灵`{% endnote %}

{% note success simple %}fix `修复 网站日志界面造成的界面错位问题`{% endnote %}

<!-- endtimeline -->

<!-- timeline 07-06 -->

- 适配 pwa
- 添加 刷新缓存按钮

<!-- endtimeline -->

<!-- timeline 07-05 -->

优化 悬浮伸缩侧边栏 代码如下,你可以在任意处引入

```css
/* 悬浮侧边栏样式 开始 */
.contact-info {
    position: fixed;
    top: 36%;
    z-index: 200;
    left: -51px;
    transition: 0.4s;
}

.contact-info:hover {
    left: 0px;
}

.contact-info .option {
    cursor: pointer;
    position: relative;
    margin: 12px 0; /* 保持选项间距 */
}

.contact-info .option i {
    display: block;
    width: 50px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    background: rgb(255, 255, 255);
    color: #b9b9b9;
    font-size: 20px;
    transition: 0.4s;
    border-radius: 0 10px 10px 0;
}

.contact-info .option:hover i {
    color: #3498db;
}

.contact-info .text {
    border-radius: 15px;
    position: absolute;
    height: 60px;
    width: 200px;
    background: rgba(255, 255, 255, .85);
    top: 0;
    z-index: -1;
    left: -136px;
    color: rgb(0, 0, 0);
    text-align: center;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-info .option:hover .text {
    left: 60px;
}

.contact-info .blok {
    position: absolute;
    height: 60px;
    width: 100px;
    top: 0;
    z-index: -1;
    left: 0px;
}

.contact-info .bloktop {
    position: absolute;
    height: 75px;
    width: 100px;
    bottom: 0px;
    z-index: -1;
    left: 0px;
}

.contact-info .blokbottom {
    position: absolute;
    height: 75px;
    width: 100px;
    top: 0;
    z-index: -1;
    left: 0px;
}

.contact-info .option:hover .blok,
.contact-info .option:hover .bloktop,
.contact-info .option:hover .blokbottom {
    left: 0px;
}

[data-theme=dark] .contact-info .option i {
    background: rgb(22, 22, 22);
    color: #b9b9b9;
}

[data-theme=dark] .contact-info .text {
    background: rgba(23, 23, 23, 0.85);
    color: rgba(255, 255, 255, 0.92);
}

@media screen and (max-width:1300px) {
    .contact-info {
        display: none !important;
    }
}

.contact-info .text .strip {
    border-radius: 5px;
    position: absolute;
    height: 36px;
    width: 5px;
    background: rgba(20, 163, 230, 0.8);
    top: 12px;
    z-index: -1;
    right: 4px;
    transition: 0.4s;
}

[data-theme=dark] .contact-info .option:hover i {
    color: #3498db;
}

.contact-info .option .text .post-reward .tip-button__text {
    margin: 25px !important;
}

.post-reward .reward-button .reward-main .reward-all {
    border-radius: 12px !important;
}

.contact-info .option .text .post-reward .reward-button .reward-main .reward-all {
    z-index: 999 !important;
}

[data-theme="dark"] .contact-info .option .text .post-reward .tip-button {
    border: solid 2px rgba(236, 233, 233, 0.8);
    background: #043749d0;
}

/* 打赏按钮区域 */
.contact-info .option .text .post-reward {
    margin: 0;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* 打赏按钮样式 */
.contact-info .option .text .post-reward .reward-button {
    display: inline-flex;
    width: 148px;
    height: 44px;
    position: relative;
    border-radius: 22px;
    background: rgba(255, 191, 55);
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    overflow: hidden;
    margin: 0 auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* 打赏图标 */
.contact-info .option .text .post-reward .reward-button i {
    font-size: 24px;
    background: transparent;
    animation: Breath 1.4s linear infinite;
    color: #ff004c !important;
    margin-right: 6px;
    transition: transform 0.3s ease;
    position: static;
}

/* 打赏文字 */
.contact-info .option .text .post-reward .reward-button .tip-button__text {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    letter-spacing: 0.3px;
    position: relative;
    z-index: 2;
    margin: 0 !important;
    text-shadow: 0 1px 1px rgba(255,255,255,0.5);
}

/* 打赏弹窗 */
.contact-info .option .text .post-reward .reward-main {
    display: flex;
    z-index: 102;
    position: absolute;
    bottom: 52px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    padding: 0;
    height: 250px;
    width: 250px;
}

/* 打赏内容区 */
.contact-info .option .text .post-reward .reward-main .reward-all {
    filter: brightness(1);
    border-radius: 14px;
    background: var(--anzhiyu-background);
    border: var(--style-border-always);
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: 0;
    box-sizing: border-box;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

/* 打赏按钮悬停效果 - 修复暗色模式丢失问题 */
.contact-info .option .text .post-reward:hover .reward-button {
    background: linear-gradient(to left, rgba(255, 102, 85) 50%, rgb(255, 191, 55) 50%);
    background-size: 200%;
    background-position-x: -100%;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* 打赏按钮动画 */
@keyframes Breath {
    0%, 100% {
        transform: scale(0.94);
    }
    50% {
        transform: scale(1.0);
    }
}

/* 暗黑模式优化 - 修复悬停动画 */
[data-theme="dark"] .contact-info .option .text .post-reward .reward-button {
    background: rgba(255, 191, 55, 0.8);
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

/* 添加暗色模式悬停状态 */
[data-theme="dark"] .contact-info .option .text .post-reward:hover .reward-button {
    /* 保持相同的渐变效果但调整透明度 */
    background: linear-gradient(
        to left, 
        rgba(255, 102, 85, 0.9) 50%, 
        rgba(255, 191, 55, 0.9) 50%
    );
    background-size: 200%;
    background-position-x: -100%;
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

[data-theme="dark"] .contact-info .option .text .post-reward .reward-button .tip-button__text {
    color: #fff;
    text-shadow: 0 1px 1px rgba(0,0,0,0.3);
}

/* 确保暗色模式下图标颜色不变 */
[data-theme="dark"] .contact-info .option .text .post-reward .reward-button i {
    color: #ff004c !important; /* 保持亮色 */
}

/* 暗色模式下的呼吸动画增强 */
[data-theme="dark"] .contact-info .option .text .post-reward .reward-button i {
    animation: BreathDark 1.4s linear infinite;
}

@keyframes BreathDark {
    0%, 100% {
        transform: scale(0.94);
        filter: drop-shadow(0 0 2px rgba(255, 0, 76, 0.8));
    }
    50% {
        transform: scale(1.0);
        filter: drop-shadow(0 0 4px rgba(255, 0, 76, 1));
    }
}

/* 悬浮侧边栏样式 结束 */
```

{% folding yellow, 优化项目 %}

1. 暗色模式悬停动画修复
   - 明确添加暗色模式下的悬停状态
   - 保持相同的渐变效果但调整透明度为0.9
   - 保留缩放和阴影效果
   
2. 暗色模式图标增强
   - 创建专属暗色模式的呼吸动画
   - 添加发光效果增强视觉反馈
   - 确保图标颜色在暗色模式下保持鲜艳
   
3. 图标颜色保护
   - 强制锁定图标颜色不受暗色模式影响
   - 使用`!important`确保覆盖其他样式
   
4. 文字阴影优化：
   - 调整暗色模式下的文字阴影为深色
   
   - 增强暗色背景上的可读性
     {% endfolding %}

<!-- endtimeline -->

<!-- timeline 07-04 -->

{% folding yellow, 优化项目 %}

- 修改 加载动画方案

- 补充 三大协议页面(隐私,Cookies,版权协议)

- 添加 悬浮伸缩侧边栏(欢迎,打赏模块)

{% endfolding %}

{% note success simple %}fix `修复 侧边栏微信卡片暗色适配`{% endnote %}
{% note success simple %}fix `修复 wechatOA跳转页`(你可以在侧边栏卡片和订阅页公众号订阅点击进入){% endnote %}

<!-- endtimeline -->

<!-- timeline 07-03 -->

移除 Umami统计数据方案

<!-- endtimeline -->

<!-- timeline 07-02 -->

添加 Umami前端界面(后端数据显示为零)

<!-- endtimeline -->

<!-- timeline 07-01 -->

- 添加 藏宝阁 页面

- 添加 直达底部 按钮

<!-- endtimeline -->

<!-- timeline 06-30 -->

移植Solitude主题的`十年之约`进度条

<!-- endtimeline -->

<!-- timeline 06-29 -->

- 编写 网站日志

- 修改即刻短文移动端显示为仿朋友圈式

<!-- endtimeline -->

<!-- timeline 06-28 -->
添加统计图页面样式,具体添加页面如下
{% folding yellow, 修改在此 %}

- 标签分页

- 分类总页

- 分类分页(首页-分类一栏可以优化,目前未处理)

- 总文章页(同上可以优化)
  {% endfolding %}
  <!-- endtimeline -->

<!-- timeline 06-27 -->
部署几项页面,具体在网站名字左侧折叠框
{% folding yellow, 修改在此 %}

- [友链状态检测服务](fca.gbfun.cc)
- [站点状态服务](status.gbfun.cc)
- [Mini-cover](cover.gbfun.cc)
{% endfolding %}
{% note success simple %}fix 修复`example.com`网址跳转问题{% endnote %}
<!-- endtimeline -->

<!-- timeline 06-26 -->
网站添加几种修改
{% folding yellow, 修改在此 %}

- 添加首页背景图渐进式加载(没感觉到作用)
- 安知鱼配套CDN修改[感知不大](后编写的日志,已经忘记添加项)
- 添加 安全跳转页面 插件
- 添加 页面平滑滚动(有点太滑了,后面有机会修改)
{% endfolding %}
<!-- endtimeline -->

<!-- timeline 06-25 -->

- 添加 [订阅页面](/subscribe)
  现在你可以进行三种订阅方式 邮箱 微信公众号 RSS订阅
  <!-- endtimeline -->

<!-- timeline 06-24 -->
Twikoo评论区QQ昵称获取临时方案
替换 anzhiyu主题自带朋友圈为 轻量朋友圈(准确来说是适配样式)
<!-- endtimeline -->

<!-- timeline 06-23 -->
- 添加 游戏收藏页(还未添加游戏)
- 加入 侧边栏来访者卡片
- 加入 动物派对主题页脚挂件
- 加入 本地搜索栏预览图(由原来的docsearch修改为 本地搜索)
<!-- endtimeline -->

<!-- timeline 06-22 -->
收集目前为止博客 现有的Bug
{% folding cyan open, 目前BUG收集 %}

{% checkbox times red checked,  ~~友链页自己的文章无法跳转~~ %}
{% checkbox times red checked,  ~~搜索无法点开~~ %}
{% checkbox times red checked,  侧边栏欢迎卡片时间不够细化,凌晨认定为早上不够符合认知  %}
{% checkbox times red checked,  ~~朋友圈鱼塘位置错位~~ %}
{% checkbox times red checked,  ~~评论区评论失败~~ %}
{% checkbox times red checked,  正式文章页与草稿文章显示字数实际不符 %}
{% checkbox times red checked,  ~~Copyright盒子内的原创按钮跳转页面失败~~ %}
{% checkbox times red checked,  ~~钓鱼(朋友圈)间接性失灵~~ %}
{% checkbox times red checked,  RSS美化与跳转问题 %}
{% checkbox times red checked,  ~~微信卡片暗色未适配~~ %}
{% checkbox times red checked,  文章原创的判断问题 %}
{% checkbox times red checked,  隐私协议页面缺少读取用户信息预览 07/04加入 %}
{% checkbox times red checked,  ~~微信OA页跳转不流畅~~ 07/04加入 %}
{% checkbox times red checked,  ~~站点检测dns问题~~ 07/04加入 %}
{% checkbox times red checked,  ~~友人帐页面添加友链过于简陋,以及勾选弹框闪现 ~~07/04加入 %}
{% checkbox times red checked,  ~~log界面错位~~ 07/04加入 %}
{% endfolding %}
<!-- endtimeline -->

<!-- timeline 06-21 -->

- 添加 总统计页面
- 修改 字体为 寒蝉全圆体
<!-- endtimeline -->

<!-- timeline 06-20 -->
- AI 摘要修改 (启用deepseek API 并修改为本地AI)
- RSS 页面初步美化
<!-- endtimeline -->

<!-- timeline 06-19 -->
自动化部署
自编写适配windows上传脚本
<!-- endtimeline -->

<!-- timeline 06-18 -->
- anzhiyu 主题朋友圈配置(添加 轻量朋友圈)
- 部署后台管理程序
<!-- endtimeline -->

<!-- timeline 06-17 -->
- 修改侧边栏公众号图片
- 安装 gulp压缩静态资源插件
<!-- endtimeline -->

<!-- timeline 06-16 -->
- 重装主题为 anzhiyu 主题
- 安装 abbrlink nofollow sitemap 插件
<!-- endtimeline -->
{% endtimeline %}

瞎折腾 Solitude 主题
{% timeline 2025.05.20-2025.06.14,red %}
<!-- timeline -->
Solitude琢磨
<!-- endtimeline -->

<!-- timeline 05-20 -->
Solitude主题第一篇文章发布
<!-- endtimeline -->

{% endtimeline %}

更早的网站部署
{% timeline 2022,red %}

<!-- timeline -->
Wordpress主题部署
(具体时间记不清了)
<!-- endtimeline -->

{% endtimeline %}
</div>