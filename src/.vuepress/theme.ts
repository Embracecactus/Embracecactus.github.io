// import { hopeTheme } from "vuepress-theme-hope";
import { plumeTheme } from "vuepress-theme-plume";
// import { enNavbar, zhNavbar } from "./navbar/index.js";
// import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

import path from 'node:path'


export default plumeTheme({
  hostname: "https://plume.yunwutong.com",
    /* 文档仓库配置，用于 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 页内信息 */
    // editLink: true,
    // lastUpdated: true,
    contributors: true,
    changelog: true,

      /**
   * 博客
   * @see https://theme-plume.vuejs.press/config/basic/#blog
   */
  blog: false, // 禁用博客
  // blog: {
  //   postList: false, // 是否启用文章列表页
  //   tags: false, // 是否启用标签页
  //   archives: false, // 是否启用归档页
  //   categories: false, // 是否启用分类页
  //   postCover: 'right', // 文章封面位置
  //   pagination: 15, // 每页显示文章数量
  // },
 /* 博客文章页面链接前缀 */
    // article: '/blog',

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 文件自动添加 frontmatter 配置
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,  // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true,      // 是否生成标题
    },
    bulletin:{
      enablePage: true,
      lifetime: 'always',
      id: '1.3.0',
      contentFile: path.join(__dirname, 'bulletin.md'),

    },
    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      //   // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      //   twoslash: true, // 启用 twoslash
      //   whitespace: true, // 启用 空格/Tab 高亮
      //   lineNumbers: true, // 启用行号
      // },

      /* 本地搜索, 默认启用 */
      // search: true,

      /**
       * Algolia DocSearch
       * 启用此搜索需要将 本地搜索 search 设置为 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },

      /* 文章字数统计、阅读时间，设置为 false 则禁用 */
      // readingTime: true,

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        abbr: true,         // 启用 abbr 语法  *[label]: content
        annotation: true,   // 启用 annotation 语法  [+label]: content
        pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
        caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
        plot: true,         // 启用隐秘文本语法 !!xxxx!!
        bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
        youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
        // artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
        audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
        icons: true,        // 启用内置图标语法  :[icon-name]:
        codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
        replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
        codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
        jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
        npmTo: true,        // 启用 npm-to 容器  ::: npm-to
        demo: true,         // 启用 demo 容器  ::: demo
        repl: {             // 启用 代码演示容器
          go: true,         // ::: go-repl
          rust: true,       // ::: rust-repl
          kotlin: true,     // ::: kotlin-repl
        },
        imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
      },

      /**
       * 在 Markdown 文件中导入其他 markdown 文件内容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      markdownInclude: true,

      /**
       * Markdown 数学公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      // watermark: true,

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    // encrypt: {},


 locales: {
    '/': {
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '联犀控制器',
        description: '',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      // notes: zhNotes,
      sidebar: 'auto',
      sidebarScrollbar:true,
      outline: "deep",
      aside:true,
      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
       // bulletin: {
       //   layout: 'top-right',
       //   contentType: 'markdown',
       //   title: '',
       //   content: '',
       // },
    },
  },




      /* 站点页脚 */
  footer: {
    message: 'Powered by <a target=\"_blank\" href=\"https://gitee.com/unitedrhino/things/blob/master/LICENSE\">昆明云物通科技有限公司</a> | <a href=\"http://beian.miit.gov.cn/\" target=\"_blank\">滇ICP备2024043132号-1\n</a> | <img src=\"/img/beian.png\" style=\"width: 15px; margin-bottom: -3px;\" />',
    copyright: '',
  },

  })


// export default hopeTheme({
//   hostname: "https://embracecactus.github.io/",
//   repo: "Embracecactus/Embracecactus.github.io",

//   docsDir: "src",
//   author: {
//     name: "GGbond",
//     url: "https://embracecactus.github.io",
//   },

//   logo: "/lx2.png",





//   locales: {
//     /**
//      * Chinese locale config
//      */
//     "/": {
//       // navbar
//       navbar: zhNavbar,

//       // sidebar
//       sidebar: zhSidebar,

//       footer: "默认页脚",

//       displayFooter: true,



//       // page meta
//       metaLocales: {
//         editLink: "在 GitHub 上编辑此页",
//       },
//     },
//   },



//   // enable it to preview all changes in time
//   // hotReload: true,

//   // These features are enabled for demo, only preserve features you need here
//   markdown: {
//     align: true,
//     attrs: true,
//     codeTabs: true,
//     component: true,
//     demo: true,
//     figure: true,
//     gfm: true,
//     imgLazyload: true,
//     imgSize: true,
//     include: true,
//     mark: true,
//     plantuml: true,
//     spoiler: true,
//     stylize: [
//       {
//         matcher: "Recommended",
//         replacer: ({ tag }) => {
//           if (tag === "em")
//             return {
//               tag: "Badge",
//               attrs: { type: "tip" },
//               content: "Recommended",
//             };
//         },
//       },
//     ],
//     sub: true,
//     sup: true,
//     tabs: true,
//     tasklist: true,
//     vPre: true,

//     // uncomment these if you need TeX support
//     // math: {
//     //   // install katex before enabling it
//     //   type: "katex",
//     //   // or install mathjax-full before enabling it
//     //   type: "mathjax",
//     // },

//     // install chart.js before enabling it
//     // chartjs: true,

//     // install echarts before enabling it
//     // echarts: true,

//     // install flowchart.ts before enabling it
//     // flowchart: true,

//     // install mermaid before enabling it
//     // mermaid: true,

//     // playground: {
//     //   presets: ["ts", "vue"],
//     // },

//     // install @vue/repl before enabling it
//     // vuePlayground: true,

//     // install sandpack-vue3 before enabling it
//     // sandpack: true,

//     // install @vuepress/plugin-revealjs and uncomment these if you need slides
//     // revealjs: {
//     //   plugins: ["highlight", "math", "search", "notes", "zoom"],
//     // },
//   },

//   plugins: {
//     blog: true,

//     // Install @waline/client before enabling it
//     // Note: This is for testing ONLY!
//     // You MUST generate and use your own comment service in production.
//     // comment: {
//     //   provider: "Waline",
//     //   serverURL: "https://waline-comment.vuejs.press",
//     // },

//     components: {
//       components: ["Badge", "VPCard"],
//     },

//     icon: {
//       prefix: "fa6-solid:",
//     },

//     // install @vuepress/plugin-pwa and uncomment these if you want a PWA
//     // pwa: {
//     //   favicon: "/favicon.ico",
//     //   cacheHTML: true,
//     //   cacheImage: true,
//     //   appendBase: true,
//     //   apple: {
//     //     icon: "/assets/icon/apple-icon-152.png",
//     //     statusBarColor: "black",
//     //   },
//     //   msTile: {
//     //     image: "/assets/icon/ms-icon-144.png",
//     //     color: "#ffffff",
//     //   },
//     //   manifest: {
//     //     icons: [
//     //       {
//     //         src: "/assets/icon/chrome-mask-512.png",
//     //         sizes: "512x512",
//     //         purpose: "maskable",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-mask-192.png",
//     //         sizes: "192x192",
//     //         purpose: "maskable",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-512.png",
//     //         sizes: "512x512",
//     //         type: "image/png",
//     //       },
//     //       {
//     //         src: "/assets/icon/chrome-192.png",
//     //         sizes: "192x192",
//     //         type: "image/png",
//     //       },
//     //     ],
//     //     shortcuts: [
//     //       {
//     //         name: "Demo",
//     //         short_name: "Demo",
//     //         url: "/demo/",
//     //         icons: [
//     //           {
//     //             src: "/assets/icon/guide-maskable.png",
//     //             sizes: "192x192",
//     //             purpose: "maskable",
//     //             type: "image/png",
//     //           },
//     //         ],
//     //       },
//     //     ],
//     //   },
//     // },
//   },
// });
