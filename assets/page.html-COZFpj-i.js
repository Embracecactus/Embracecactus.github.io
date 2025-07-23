import{c as s,e as r,f as c,a as n,d as l,F as m,h as u,u as h,b as g,r as k,o,t as b,i as v,j as y,k as t}from"./app-BCFgCNGn.js";const w={__name:"page.html",setup(f){const p=v({setup(){const a=y("Hello world!"),e=i=>{a.value=i.target.value};return()=>[t("p",[t("span","输入: "),t("input",{value:a.value,onInput:e})]),t("p",[t("span","输出: "),a.value])]}});return(a,e)=>{const i=k("Badge");return o(),s("div",null,[r(` ---
# 这是文章的标题
title: 页面配置
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 3
# 设置作者
author: Ms.Hope
# 设置写作时间
date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: 无版权
---

\`more\` 注释之前的内容被视为文章摘要。

<!-- more `),e[2]||(e[2]=c(`<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">title: 页面标题</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>`,14)),r(" markdownlint-disable MD033 "),n("ul",null,[(o(),s(m,null,u(3,d=>n("li",null,b(d),1)),64))]),r(" markdownlint-enable MD033 "),e[3]||(e[3]=n("p",null,"你也可以创建并引入你自己的组件。",-1)),l(h(p)),e[4]||(e[4]=n("hr",null,null,-1)),e[5]||(e[5]=n("p",null,"主题包含一些有用的组件。这里是一些例子:",-1)),n("ul",null,[n("li",null,[n("p",null,[e[0]||(e[0]=g("文字结尾应该有深蓝色的 徽章文字 徽章。 ")),l(i,{text:"徽章文字",color:"#242378"})])]),e[1]||(e[1]=n("li",null,[n("p",null,"一个卡片:")],-1))])])}}},x=JSON.parse('{"path":"/zh/demo/page.html","title":"","lang":"zh-CN","frontmatter":{"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-23T12:49:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GGbond\\",\\"url\\":\\"https://embracecactus.github.io\\"}]}"],["meta",{"property":"og:url","content":"https://embracecactus.github.io/zh/demo/page.html"}],["meta",{"property":"og:site_name","content":"勇闯嵌入式的猪猪侠的博客"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-07-23T12:49:31.000Z"}],["meta",{"property":"article:modified_time","content":"2025-07-23T12:49:31.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://embracecactus.github.io/demo/page.html"}]]},"git":{"createdTime":1753107151000,"updatedTime":1753274971000,"contributors":[{"name":"li jian","username":"","email":"15588296118@163.com","commits":2}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"zh/demo/page.md","excerpt":"<!-- ---\\n# 这是文章的标题\\ntitle: 页面配置\\n# 你可以自定义封面图片\\ncover: /assets/images/cover1.jpg\\n# 这是页面的图标\\nicon: file\\n# 这是侧边栏的顺序\\norder: 3\\n# 设置作者\\nauthor: Ms.Hope\\n# 设置写作时间\\ndate: 2020-01-01\\n# 一个页面可以有多个分类\\ncategory:\\n  - 使用指南\\n# 一个页面可以有多个标签\\ntag:\\n  - 页面配置\\n  - 使用指南\\n# 此页面会在文章列表置顶\\nsticky: true\\n# 此页面会出现在星标文章中\\nstar: true\\n# 你可以自定义页脚\\nfooter: 这是测试显示的页脚\\n# 你可以自定义版权信息\\ncopyright: 无版权\\n---\\n\\n`more` 注释之前的内容被视为文章摘要。\\n\\n-->"}');export{w as comp,x as data};
