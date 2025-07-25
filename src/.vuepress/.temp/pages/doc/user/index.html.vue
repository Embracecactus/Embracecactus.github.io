<template><div><h1 id="📋-用户手册-通过控制器连接设备" tabindex="-1"><a class="header-anchor" href="#📋-用户手册-通过控制器连接设备"><span>📋 用户手册：通过控制器连接设备</span></a></h1>
<hr>
<h2 id="🖥️-第一步-配置网络连接" tabindex="-1"><a class="header-anchor" href="#🖥️-第一步-配置网络连接"><span>🖥️ 第一步：配置网络连接</span></a></h2>
<h3 id="_1-1-直连设备" tabindex="-1"><a class="header-anchor" href="#_1-1-直连设备"><span>1.1 直连设备</span></a></h3>
<ul>
<li><strong>方式</strong>：使用网线<strong>直接连接控制器和笔记本电脑</strong></li>
<li><strong>要求</strong>：确保电脑的 IP 地址设置为 <strong>192.168.1.100</strong>（局域网方式）</li>
</ul>
<h3 id="_1-2-使用路由器连接" tabindex="-1"><a class="header-anchor" href="#_1-2-使用路由器连接"><span>1.2 使用路由器连接</span></a></h3>
<ul>
<li>
<p><strong>方式</strong>：通过<strong>路由器连接设备</strong></p>
</li>
<li>
<p>操作</p>
<ol>
<li>登录路由器管理界面。</li>
<li>查看并记录控制器设备的 IP 地址。</li>
<li>使用该 IP 地址进行后续操作。</li>
</ol>
</li>
</ul>
<hr>
<h2 id="🔌-第二步-登录设备控制界面" tabindex="-1"><a class="header-anchor" href="#🔌-第二步-登录设备控制界面"><span>🔌 第二步：登录设备控制界面</span></a></h2>
<h3 id="_2-1-通过路由器连接" tabindex="-1"><a class="header-anchor" href="#_2-1-通过路由器连接"><span>2.1 通过路由器连接</span></a></h3>
<ul>
<li>
<p><strong>IP 地址</strong>：使用路由器获取到的控制器 IP 地址</p>
</li>
<li>
<p><strong>端口</strong>：<strong>80</strong></p>
</li>
<li>
<p>浏览器访问</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>http://&#x3C;设备IP>:80</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>功能</strong>：进入 <strong>运动控制界面</strong>，进行设备调试与控制。</p>
</li>
</ul>
<h3 id="_2-2-局域网连接-固定-ip" tabindex="-1"><a class="header-anchor" href="#_2-2-局域网连接-固定-ip"><span>2.2 局域网连接（固定 IP）</span></a></h3>
<ul>
<li>
<p><strong>IP 地址</strong>：192.168.1.109</p>
</li>
<li>
<p><strong>端口</strong>：<strong>80</strong></p>
</li>
<li>
<p>浏览器访问</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>http://192.168.1.109:80</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>功能</strong>：进入 <strong>运动控制界面</strong>，进行设备调试与控制。</p>
</li>
</ul>
<hr>
<h2 id="🌐-第三步-登录-node-red-编程界面" tabindex="-1"><a class="header-anchor" href="#🌐-第三步-登录-node-red-编程界面"><span>🌐 第三步：登录 Node-RED 编程界面</span></a></h2>
<ul>
<li>
<p><strong>端口</strong>：<strong>1880</strong></p>
</li>
<li>
<p>浏览器访问</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>http://&#x3C;设备IP>:1880</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>功能</strong>：进入 <strong>Node-RED 编程界面</strong>，实现自动化逻辑与流程控制。</p>
</li>
</ul>
<hr>
<h2 id="✅-示例流程图-文字版" tabindex="-1"><a class="header-anchor" href="#✅-示例流程图-文字版"><span>✅ 示例流程图（文字版）</span></a></h2>
<p>复制代码</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>|  使用网线直连设备          |</span></span>
<span class="line"><span>|  设置 IP 为 192.168.1.100 |</span></span>
<span class="line"><span>+---------------------------+</span></span>
<span class="line"><span>              ↓</span></span>
<span class="line"><span>+--------------------------+</span></span>
<span class="line"><span>|  登录运动控制界面         |</span></span>
<span class="line"><span>|  端口 80                 |</span></span>
<span class="line"><span>+--------------------------+</span></span>
<span class="line"><span>              ↓</span></span>
<span class="line"><span>+--------------------------+</span></span>
<span class="line"><span>|   登录 Node-RED 界面      |</span></span>
<span class="line"><span>|   端口 1880               |</span></span>
<span class="line"><span>+---------------------------+</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="❗-注意事项" tabindex="-1"><a class="header-anchor" href="#❗-注意事项"><span>❗ 注意事项</span></a></h2>
<ul>
<li>确保网络连接正常，IP 地址配置正确。</li>
<li>使用浏览器访问时，请使用<strong>Chrome / Edge / Firefox</strong> 等现代浏览器。</li>
<li>若无法访问，请检查防火墙或设备是否启用对应端口。</li>
</ul>
<hr>
<h2 id="📞-技术支持" tabindex="-1"><a class="header-anchor" href="#📞-技术支持"><span>📞 技术支持</span></a></h2>
<p>如遇问题，请联系技术支持团队</p>
<hr>
<blockquote>
<p>本手册适用于 联犀控制制器设备，适用于工业自动化、运动控制等场景。用户根据实际需求进行扩展和调整。</p>
</blockquote>
</div></template>


