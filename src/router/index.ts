import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Start from '../views/Start.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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
    path: '*',
    name: 'Start',
    component: Start
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
