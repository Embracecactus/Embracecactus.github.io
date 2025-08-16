import comp from "E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/doc/user/index.html.vue"
const data = JSON.parse("{\"path\":\"/doc/user/\",\"title\":\"联犀控制器连接电脑\",\"lang\":\"zh-CN\",\"frontmatter\":{\"portfolio：\":true,\"icon\":\"pen-to-square\",\"date\":\"2025-07-22T00:00:00.000Z\",\"category\":[\"用户手册\"],\"tag\":[\"联犀控制器\"],\"title\":\"联犀控制器连接电脑\",\"createTime\":\"2025/07/21 22:06:03\"},\"readingTime\":{\"minutes\":1.64,\"words\":491},\"git\":{},\"filePathRelative\":\"doc/user/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"9a09b4\",\"sort\":10005,\"name\":\"doc\"},{\"id\":\"e4231d\",\"sort\":10015,\"name\":\"user\"}],\"bulletin\":true}")
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
