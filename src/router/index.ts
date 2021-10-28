import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import About from '../pages/about.vue'
import Home from '../pages/home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  // base: 'http://localhost:8080',
  routes
})

export default router

