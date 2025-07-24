import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
scription: "Embedded Systems",
    "/": {
      lang: "zh-CN",
      title: "云物通科技有限公司",
      description: "云物通科技有限公司",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
