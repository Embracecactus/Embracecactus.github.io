import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "李健的博客",
      description: "李健的博客",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "博客演示",
    //   description: "vuepress-theme-hope 的博客演示",
    // },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
