import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/instructions',
    name: 'How To Play',
    component: () => import(/* webpackChunkName: "HowToPlay" */ '../views/HowToPlay.vue')
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import(/* webpackChunkName: "HowToPlay" */ '../views/Play.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
