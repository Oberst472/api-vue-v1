import { createApp } from 'vue'
import './assets/scss/main.scss'
import 'element-plus/dist/index.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router';
import pinia from './stores';

const app = createApp(App)

app.use(router)
    .use(router)
    .use(pinia)
    .use(ElementPlus)
    .mount('#app')

