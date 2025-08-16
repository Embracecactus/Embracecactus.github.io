import comp from "E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/doc/develop/index.html.vue"
const data = JSON.parse("{\"path\":\"/doc/develop/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"doc/develop/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"9a09b4\",\"sort\":10005,\"name\":\"doc\"},{\"id\":\"a01515\",\"sort\":10006,\"name\":\"develop\"}],\"bulletin\":true}")
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
