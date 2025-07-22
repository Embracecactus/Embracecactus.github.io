import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "Linux",
        icon: "pen-to-square",
        prefix: "linux/",
        children: [
          { text: "orangepi", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "MCU",
        icon: "pen-to-square",
        prefix: "mcu/",
        children: [
       { text: "esp32", icon: "pen-to-square", link: "2" },  //link 对于 apple 2.md
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
