import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/", // 一个导航栏项具体包含内容为/zh/README.md
  // "/zh/demo/",// 一个导航栏项具体包含内容为/zh/README.md
  "/AxonCore/",// 一个导航栏项具体包含内容为/zh/README.md
  {
    text: "技术栈", // 一个导航栏项具体包含内容 博文
    icon: "pen-to-square",
    prefix: "/posts/",
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
