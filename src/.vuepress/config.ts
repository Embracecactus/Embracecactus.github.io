import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "云物通科技有限公司",
      description: "云物通科技有限公司",
    },
  },

    head: [
    // 配置站点图标
    ['link', { rel: 'icon', type: 'image/png', href: '/logo/logo.png' }],
    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-QKNZQ3Z8J4'
      }
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QKNZQ3Z8J4');
      `
    ]
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用
  theme, // 主题配置在them.ts中这与联犀不同

  // Enable it with pwa
  // shouldPrefetch: false,
});
