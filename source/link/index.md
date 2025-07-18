---
title: 友人帐
date: 2025-06-22 14:03:13
type: "link"
comments: true
---
<style>.status-tag{position:absolute;bottom:0;right:0;padding:0 3px;border-radius:6px 0 12px 0;font-size:10px;color:#fff;font-weight:700;transition:font-size .3s ease-out,width .3s ease-out,opacity .3s ease-out}.flink-list-item:hover .status-tag{font-size:0px;opacity:0}.status-tag-green{background-color:#0080ff}.status-tag-yellow{background-color:#fc0}.status-tag-orange{background-color:#f80}.status-tag-red{background-color:#b00}.tk-comments>.tk-submit{opacity:0;height:0;transition:opacity .5s,height .5s;overflow:hidden}</style>


<style>
.tk-comments > .tk-submit {
  opacity: 0;
  height: 0;
  transition: opacity 0.5s, height 0.5s;
  overflow: hidden;
}
</style>

<details>
   <summary>友情链接页免责声明</summary>
   <h2 id="免责声明">
      <a href="#免责声明" class="headerlink" title="免责声明"></a>
      免责声明
   </h2>
   <p>本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。因为部分友链网站甚至没有做备案、域名并未做实名认证等，所以友链网站均可能存在风险，请你须知。</p>
   <p>所以在我力所能及的情况下，我会包括但不限于：</p>
   <ul>
      <li>针对收录的博客中的绝大多数内容通过标题来鉴别是否存在有风险的内容</li>
      <li>在收录的友链好文推荐中检查是否存在风险内容</li>
   </ul>
   <p>但是你在访问的时候，仍然无法避免，包括但不限于：</p>
   <ul>
      <li>作者更换了超链接的指向，替换成了其他内容</li>
      <li>作者的服务器被恶意攻击、劫持、被注入恶意内容</li>
      <li>作者的域名到期，被不法分子用作他用</li>
      <li>作者修改了文章内容，增加钓鱼网站、广告等无效信息</li>
      <li>不完善的隐私保护对用户的隐私造成了侵害、泄漏</li>
   </ul>
   <p>最新文章部分为机器抓取，本站作者未经过任何审核和筛选，本着友链信任原则添加的。如果你发现其中包含违反中华人民共和国法律的内容，请即使联系和举报。该友链会被拉黑。</p>
   <p>
      如果因为从本页跳转给你造成了损失，深表歉意，并且建议用户如果发现存在问题在本页面进行回复。通常会很快处理。如果长时间无法得到处理，建议联系<code>gb-1@foxmail.com</code>
   </p>
</details>


## 友情链接申请
<p>很高兴与你相识,如果你也想加入友链,可以在下方留言,我会在看到后及时添加 😀😗 </p>

请 **勾选** 你符合的条件：

<div id="friends_checkbox">
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我已添加 <b>GB_blog</b> 博客的友情链接</label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我的链接主体为 <b>个人</b>，网站类型为<b>博客</b></label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 我的网站现在可以在中国大陆区域正常访问</label>
</p>
<p>
    <label><input type="checkbox" onclick="checkForm()"> 网站内容符合中国大陆法律法规</label>
</p>
</div>

<script>
var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
if(twikooSubmit) {
    twikooSubmit.style.opacity = "0";
}
function checkForm() {
    let comment = document.querySelector('.tk-submit');
    if(comment===null) return;
    let checkboxes = document.querySelectorAll('#friends_checkbox input[type="checkbox"]');
    let content = document.querySelector('.el-textarea__inner');
    let allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
    if (allChecked) {
        comment.style.display = 'block';
        content.value = "```yaml \n- name: \n  link: \n  avatar: \n  descr: \n```";
        content.style.height = '205px';
        content.focus();
    } else {
        comment.style.display = 'none';
        content.value = '';
    }
}
window.onload = checkForm;
document.addEventListener('pjax:complete', checkForm);
</script>