import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import Login from './components/pages/Login.vue'
import Tweet from './components/pages/Tweet.vue'
import Setting from './components/pages/Setting.vue'
import Youtube from './components/pages/Youtube.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/tweet', name: 'Tweet', component: Tweet },
    { path: '/setting', name: 'Setting', component: Setting },
    { path: '/youtube', name: 'Youtube', component: Youtube },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
