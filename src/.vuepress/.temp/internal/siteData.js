export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"/logo/logo2.png\"}],[\"script\",{\"async\":\"true\",\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-QKNZQ3Z8J4\"}],[\"script\",{},\"\\n        window.dataLayer = window.dataLayer || [];\\n        function gtag(){dataLayer.push(arguments);}\\n        gtag('js', new Date());\\n        gtag('config', 'G-QKNZQ3Z8J4');\\n      \"]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"云物通科技有限公司\",\"description\":\"云物通科技有限公司\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
