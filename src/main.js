import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/bootstrap.scss';  // 引入自定义的 Bootstrap SCSS


createApp(App)
    .use(router)
    .mount('#app')

