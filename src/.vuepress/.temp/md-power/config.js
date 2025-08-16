import { defineClientConfig } from 'vuepress/client'
import Tabs from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import PDFViewer from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/PDFViewer.vue'
import VPVideoEmbed from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/VPVideoEmbed.vue'
import CodePen from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/CodePen.vue'
import JSFiddle from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/JsFiddle.vue'
import Replit from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/Replit.vue'
import CodeSandbox from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/CodeSandbox.vue'
import Plot from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import CodeRepl from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/CodeRepl.vue'
import CanIUse from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/CanIUse.vue'
import FileTreeNode from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import AudioReader from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/AudioReader.vue'
import VPDemoBasic from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoBasic.vue'
import VPDemoNormal from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/VPDemoNormal.vue'
import Annotation from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/Annotation.vue'
import Abbreviation from 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/components/Abbreviation.vue'

import 'E:/_02_blog/myblog_2/node_modules/.pnpm/vuepress-plugin-md-power@1._c7fa273bec52eb95b6af03f70c702602/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('PDFViewer', PDFViewer)
    app.component('VPVideoEmbed', VPVideoEmbed)
    app.component('CodePenViewer', CodePen)
    app.component('JSFiddleViewer', JSFiddle)
    app.component('ReplitViewer', Replit)
    app.component('CodeSandboxViewer', CodeSandbox)
    app.component('Plot', Plot)
    app.component('CodeRepl', CodeRepl)
    app.component('CanIUseViewer', CanIUse)
    app.component('FileTreeNode', FileTreeNode)
    app.component('AudioReader', AudioReader)
    app.component('VPDemoBasic', VPDemoBasic)
    app.component('VPDemoNormal', VPDemoNormal)
    app.component('Annotation', Annotation)
    app.component('Abbreviation', Abbreviation)
  },
  setup() {
    
  }
})
