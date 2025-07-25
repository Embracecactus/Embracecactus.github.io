export const redirects = JSON.parse("{\"/blog/mcu/2.html\":\"/article/w0hld1ls/\",\"/doc/develop/system.html\":\"/article/ptkp72uo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":""} }],
  ["/article/w0hld1ls/", { loader: () => import(/* webpackChunkName: "article_w0hld1ls_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/article/w0hld1ls/index.html.js"), meta: {"title":"2","icon":"pen-to-square"} }],
  ["/doc/develop/", { loader: () => import(/* webpackChunkName: "doc_develop_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/doc/develop/index.html.js"), meta: {"title":""} }],
  ["/article/ptkp72uo/", { loader: () => import(/* webpackChunkName: "article_ptkp72uo_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/article/ptkp72uo/index.html.js"), meta: {"title":"linux 系统的制作","icon":"pen-to-square"} }],
  ["/doc/user/", { loader: () => import(/* webpackChunkName: "doc_user_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/doc/user/index.html.js"), meta: {"title":"联犀控制器连接电脑","icon":"pen-to-square"} }],
  ["/hardware/AxonCore/", { loader: () => import(/* webpackChunkName: "hardware_AxonCore_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/hardware/AxonCore/index.html.js"), meta: {"title":"核心产品","icon":"laptop-code"} }],
  ["/soft/linuxcnc/", { loader: () => import(/* webpackChunkName: "soft_linuxcnc_index.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/soft/linuxcnc/index.html.js"), meta: {"title":"运动控制模块","icon":"laptop-code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/pzx/vue-test/Embracecactus.github.io/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
