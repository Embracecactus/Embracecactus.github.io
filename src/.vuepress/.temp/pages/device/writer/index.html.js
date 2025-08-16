import comp from "E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/writer/index.html.vue"
const data = JSON.parse("{\"path\":\"/device/writer/\",\"title\":\"智能写字机\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"智能写字机\",\"index\":false,\"icon\":\"edit\",\"gitInclude\":[]},\"readingTime\":{\"minutes\":3.28,\"words\":984},\"git\":{},\"filePathRelative\":\"device/writer/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"913f9c\",\"sort\":10002,\"name\":\"device\"},{\"id\":\"543a97\",\"sort\":10010,\"name\":\"writer\"}],\"bulletin\":true}")
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
