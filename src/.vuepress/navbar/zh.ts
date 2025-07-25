// import { navbar } from "vuepress-theme-hope";
import { defineNavbarConfig } from 'vuepress-theme-plume'
export const zhNavbar = defineNavbarConfig([
 { text: '首页', link: '/',icon:'ic:round-home' },
 { text: '硬件设备',icon:'mdi:hard-hat', items: [
    { text: '联犀控制器', link:'/hardware/AxonCore/'},
 ]},
  { 
    text: '开源软件', 
    icon: 'mdi:open-source',  // 补充图标名称
    items: [
        { text: 'linuxcnc', link: '/soft/linuxcnc/' },
    ]
  },
  {
    text: '文档',
    icon: 'mdi:book-open-page-variant',
    items: [
      { text: '用户手册', link: '/doc/user/' },
      { text: '开发手册', link: '/doc/develop/system.md' },
    ]
  },
   
  { text: '关于我们', link: '/about/' },
  { text: '联系我们', link: '/contact/' },
 
 
 
 
  // "/", // 一个导航栏项具体包含内容为/zh/README.md
  // "/zh/demo/",// 一个导航栏项具体包含内容为/zh/README.md
  // "/AxonCore/",// 一个导航栏项具体包含内容为/zh/README.md
  // {
  //   text: "技术栈", // 一个导航栏项具体包含内容 博文
  //   icon: "pen-to-square",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "Linux",
  //       icon: "pen-to-square",
  //       prefix: "linux/",
  //       children: [
  //         { text: "orangepi", icon: "pen-to-square", link: "1" },
  //       ],
  //     },
  //     {
  //       text: "MCU",
  //       icon: "pen-to-square",
  //       prefix: "mcu/",
  //       children: [
  //      { text: "esp32", icon: "pen-to-square", link: "2" },  //link 对于 apple 2.md
  //       ],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
