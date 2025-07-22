import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/": {
    //   lang: "zh-CN",
    //   title: "李健的博客",
    //   description: "",
    // },
    "/zh/": {
      lang: "zh-CN",
      title: "勇闯嵌入式的猪猪侠的博客",
      description: "勇闯嵌入式的猪猪侠的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
