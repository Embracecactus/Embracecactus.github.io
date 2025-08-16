import comp from "E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/laser/index.html.vue"
const data = JSON.parse("{\"path\":\"/device/laser/\",\"title\":\"Laser\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Laser\",\"index\":false,\"icon\":\"laptop-code\"},\"readingTime\":{\"minutes\":0.32,\"words\":96},\"git\":{},\"filePathRelative\":\"device/laser/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"913f9c\",\"sort\":10002,\"name\":\"device\"},{\"id\":\"898f77\",\"sort\":10009,\"name\":\"laser\"}],\"bulletin\":true}")
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
