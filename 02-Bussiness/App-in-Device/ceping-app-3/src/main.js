import { createApp } from 'vue'
import axios from 'axios'
import './style.css'
import App from './App.vue'
import router from './router'

// 5. Create and mount the root instance.
const app = createApp(App)
app.use(router)
app.provide('axios', app.config.globalProperties.axios = axios)

app.mount('#app')

