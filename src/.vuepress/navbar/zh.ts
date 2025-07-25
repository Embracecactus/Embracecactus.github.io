// import { navbar } from "vuepress-theme-hope";
import { defineNavbarConfig } from 'vuepress-theme-plume'
export const zhNavbar = defineNavbarConfig([
 { text: '首页', link: '/',icon:'ic:round-home' },
 { text: '控制器',icon:'mdi:hard-hat', items: [
    { text: '控制器系列' , link:'/hardware/AxonCore/'},
    { text: '控制器 X'   , link:'/hardware/xAxonCore/'},
    { text: '控制器 Y'   , link:'/hardware/yAxonCore/'},
 ]},
  { text: '设备集成',icon:'mdi:tools', items: [
    { text: '写字机'        , link:'/device/writer/'},
    { text: '激光雕刻机'    , link:'/device/laser/'},
    { text: 'Cnc雕刻机'     , link:'/device/cnc/'},
    { text: 'Scara机械臂'   , link:'/device/scara/'},
    { text: '传送带'        , link:'/device/BeltConveyor/'},
 ]},
  { 
    text: '开源软件', 
    icon: 'mdi:open-source',  // 补充图标名称
    items: [
        { text: '联犀物联网接入', link: '/soft/ithings/' },
        { text: 'linuxcnc'     , link: '/soft/linuxcnc/' },
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
