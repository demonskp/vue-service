import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const envConfig = ENV_CONFIG;

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: envConfig.publicPath,
  routes
})

export default router
