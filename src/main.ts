import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import "@/assets/css/index.css"

// 全局按需引入vant组件
import {vantPlugins} from "./assets/components/vant.js"
createApp(App).use(router).use(vantPlugins).mount('#app')
