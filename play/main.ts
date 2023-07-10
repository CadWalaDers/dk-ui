import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import 'babel-polyfill'
// --- 文件src/main.ts | src/main.js
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript)

import dkPlus from 'dk-plus'
import '@dk-plus/theme-chalk'

const app = createApp(App)
app.use(router)
app.use(dkPlus)
app.use(hljsVuePlugin)
app.mount('#app')
