import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog of ZhuZhuXia Who Adventures in Embedded Systems",
      description: "Blog of ZhuZhuXia Who Adventures in Embedded Systems",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "GGBond科技有限公司",
      description: "GGBond科技有限公司",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
