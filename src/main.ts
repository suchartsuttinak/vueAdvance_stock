import { createApp } from 'vue'
import App from './App.vue'
import './tailwind/app.css'
import './tailwind/custom.css'
import router from './router/index'

// import pinia
import { createPinia } from 'pinia'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
