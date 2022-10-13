import './bootstrap';
import '../css/app.css'

import { createApp } from 'vue'
import router from './router'

import App from '../js/App.vue'

createApp(App).use(router).mount('#app')