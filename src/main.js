import './style.css'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia'

import HomeView from './pages/Home.vue'
import AboutView from './pages/About.vue'
import App from "./app.vue"


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const app = createApp(App);
const pinia = createPinia()
const router = createRouter({
  history: createMemoryHistory(),
  routes
})

app.use(router)
app.use(pinia)
app.mount('#app')