<template><div><h1 id="ithings-物联网平台" tabindex="-1"><a class="header-anchor" href="#ithings-物联网平台"><span>iThings 物联网平台</span></a></h1>
<p>iThings 是一个功能强大的物联网平台，提供设备管理、数据收集、规则引擎等完整的物联网解决方案。</p>
<h2 id="功能特点" tabindex="-1"><a class="header-anchor" href="#功能特点"><span>功能特点</span></a></h2>
<ul>
<li><strong>设备管理</strong>：轻松注册、监控和管理各类物联网设备</li>
<li><strong>数据采集</strong>：实时收集和存储设备数据</li>
<li><strong>规则引擎</strong>：基于规则的自动化数据处理和响应</li>
<li><strong>可视化界面</strong>：直观的Web界面，便于操作和监控</li>
<li><strong>灵活集成</strong>：支持多种通信协议和第三方系统集成</li>
</ul>
<h2 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构"><span>系统架构</span></a></h2>
<p>iThings 平台由以下核心组件构成：</p>
<h3 id="_1-设备连接层" tabindex="-1"><a class="header-anchor" href="#_1-设备连接层"><span>1. 设备连接层</span></a></h3>
<p><img src="@source/soft/ithings/ithingconnect.png" alt="设备连接"></p>
<p>负责处理设备的接入和通信，支持多种协议如MQTT、CoAP等。</p>
<h3 id="_2-设备管理" tabindex="-1"><a class="header-anchor" href="#_2-设备管理"><span>2. 设备管理</span></a></h3>
<p><img src="@source/soft/ithings/ithingdevice.png" alt="设备管理"></p>
<p>提供设备的全生命周期管理，包括注册、配置、升级和监控。</p>
<h3 id="_3-网关服务" tabindex="-1"><a class="header-anchor" href="#_3-网关服务"><span>3. 网关服务</span></a></h3>
<p><img src="@source/soft/ithings/ithinggateway.png" alt="网关服务"></p>
<p>作为边缘计算节点，处理本地数据并与云平台通信。</p>
<h3 id="_4-子设备管理" tabindex="-1"><a class="header-anchor" href="#_4-子设备管理"><span>4. 子设备管理</span></a></h3>
<p><img src="@source/soft/ithings/ithingsubdevice.png" alt="子设备管理"></p>
<p>支持层级化的设备管理，适用于复杂的物联网部署场景。</p>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<h3 id="设备接入" tabindex="-1"><a class="header-anchor" href="#设备接入"><span>设备接入</span></a></h3>
<ol>
<li>登录iThings平台</li>
<li>在设备管理页面点击&quot;新增&quot;按钮</li>
<li>填写设备信息并提交</li>
<li>按照指引完成设备连接配置</li>
</ol>
<h3 id="数据监控" tabindex="-1"><a class="header-anchor" href="#数据监控"><span>数据监控</span></a></h3>
<ol>
<li>在设备详情页面查看实时数据</li>
<li>使用数据图表分析历史趋势</li>
<li>设置数据告警规则</li>
</ol>
<h3 id="规则引擎配置" tabindex="-1"><a class="header-anchor" href="#规则引擎配置"><span>规则引擎配置</span></a></h3>
<p>iThings 集成了强大的规则引擎，可以基于设备数据触发自动化动作：</p>
<p><img src="@source/soft/ithings/rulego1.png" alt="规则引擎1">
<img src="@source/soft/ithings/rulego2.png" alt="规则引擎2"></p>
<h3 id="node-red-集成" tabindex="-1"><a class="header-anchor" href="#node-red-集成"><span>Node-RED 集成</span></a></h3>
<p>通过Node-RED可以快速构建自定义的物联网应用：</p>
<p><img src="@source/soft/ithings/nodered.png" alt="Node-RED集成"></p>
<h2 id="温度湿度传感器示例" tabindex="-1"><a class="header-anchor" href="#温度湿度传感器示例"><span>温度湿度传感器示例</span></a></h2>
<p>以温度湿度传感器为例，展示设备配置和数据监控：</p>
<p><img src="@source/soft/ithings/ithingsubdevicetempandhum.png" alt="温湿度传感器">
<img src="@source/soft/ithings/ithingsubdevicetempandhumconfig.png" alt="传感器配置"></p>
<h2 id="技术支持" tabindex="-1"><a class="header-anchor" href="#技术支持"><span>技术支持</span></a></h2>
<p>如有问题或需要帮助，请联系技术支持团队。</p>
</div></template>


