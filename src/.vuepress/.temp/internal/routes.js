export const redirects = JSON.parse("{\"/blog/mcu/2.html\":\"/article/w0hld1ls/\",\"/doc/develop/system.html\":\"/article/ptkp72uo/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":""} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":""} }],
  ["/article/w0hld1ls/", { loader: () => import(/* webpackChunkName: "article_w0hld1ls_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/article/w0hld1ls/index.html.js"), meta: {"title":"2","icon":"pen-to-square"} }],
  ["/device/BeltConveyor/", { loader: () => import(/* webpackChunkName: "device_BeltConveyor_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/BeltConveyor/index.html.js"), meta: {"title":""} }],
  ["/device/cnc/", { loader: () => import(/* webpackChunkName: "device_cnc_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/cnc/index.html.js"), meta: {"title":"Cnc","icon":"laptop-code"} }],
  ["/device/writer/", { loader: () => import(/* webpackChunkName: "device_writer_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/writer/index.html.js"), meta: {"title":"智能写字机","icon":"edit"} }],
  ["/doc/develop/", { loader: () => import(/* webpackChunkName: "doc_develop_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/doc/develop/index.html.js"), meta: {"title":""} }],
  ["/article/ptkp72uo/", { loader: () => import(/* webpackChunkName: "article_ptkp72uo_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/article/ptkp72uo/index.html.js"), meta: {"title":"linux 系统的制作","icon":"pen-to-square"} }],
  ["/doc/user/", { loader: () => import(/* webpackChunkName: "doc_user_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/doc/user/index.html.js"), meta: {"title":"联犀控制器连接电脑","icon":"pen-to-square"} }],
  ["/device/laser/", { loader: () => import(/* webpackChunkName: "device_laser_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/laser/index.html.js"), meta: {"title":"Laser","icon":"laptop-code"} }],
  ["/soft/ithings/", { loader: () => import(/* webpackChunkName: "soft_ithings_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/soft/ithings/index.html.js"), meta: {"title":"iThings 物联网平台"} }],
  ["/soft/linuxcnc/", { loader: () => import(/* webpackChunkName: "soft_linuxcnc_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/soft/linuxcnc/index.html.js"), meta: {"title":"运动控制模块","icon":"laptop-code"} }],
  ["/device/scara/", { loader: () => import(/* webpackChunkName: "device_scara_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/device/scara/index.html.js"), meta: {"title":"Cnc","icon":"laptop-code"} }],
  ["/hardware/xAxonCore/", { loader: () => import(/* webpackChunkName: "hardware_xAxonCore_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/hardware/xAxonCore/index.html.js"), meta: {"title":"核心产品","icon":"laptop-code"} }],
  ["/hardware/AxonCore/", { loader: () => import(/* webpackChunkName: "hardware_AxonCore_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/hardware/AxonCore/index.html.js"), meta: {"title":"核心产品","icon":"laptop-code"} }],
  ["/hardware/yAxonCore/", { loader: () => import(/* webpackChunkName: "hardware_yAxonCore_index.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/hardware/yAxonCore/index.html.js"), meta: {"title":"核心产品","icon":"laptop-code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/_02_blog/myblog_2/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
