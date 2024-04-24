import './style.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import App from "./app.vue"


const routes = []

const app = createApp(App);
const pinia = createPinia()
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

app.use(router)
app.use(pinia)
app.mount('#app')