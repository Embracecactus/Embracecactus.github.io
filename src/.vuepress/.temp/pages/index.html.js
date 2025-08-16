import comp from "E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"hero\",\"full\":true,\"background\":\"tint-plate\",\"hero\":{\"name\":\"联犀控制器\",\"tagline\":\"统一管控中心\",\"text\":\"联犀控制器是联犀物联网平台的核心管理组件 <br> 提供统一的设备管控、数据监控和业务配置功能 <br> 支持多租户环境下的集中化运维管理\",\"actions\":[{\"theme\":\"brand\",\"text\":\"马上开始 →\",\"icon\":\"carbon:arrow-right-bold\",\"link\":\"/hardware/AxonCore/\"}]}},{\"type\":\"features\",\"title\":\"系统特性\",\"features\":[{\"title\":\"低代码编程\",\"icon\":\"material-symbols:workspaces\",\"details\":\"Node Red 图形化拖拽编程\"},{\"title\":\"数据接入\",\"icon\":\"mdi:server-network\",\"details\":\"支持I2C, SPI, UART\"},{\"title\":\"运动控制\",\"icon\":\"heroicons:rocket-launch\",\"details\":\"多轴联动运动算法集成\"},{\"title\":\"平台管理\",\"icon\":\"mdi:wifi-settings\",\"details\":\"联犀物联网平台接入\"}]}]},\"readingTime\":{\"minutes\":1.38,\"words\":414},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[],\"bulletin\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
