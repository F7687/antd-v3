import { createApp } from 'vue'
import App from './App.vue'

// 安装路由 cnpm install vue-router@next -S
import router from './router'
// 安装vuex cnpm i vuex@next -S
import store from "./store";
// 引入antd  cnpm i --save ant-design-vue@next -S
import Antd from 'ant-design-vue';
import '/@modules/ant-design-vue/dist/antd.css'
import './index.css'
console.log('router:',router)
createApp(App).use(router).use(store).use(Antd).mount('#app')
