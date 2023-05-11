import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/apps/:page',
    name: 'apps list',
    component: () => import('../views/AppsView.vue')
  },
  {
    path: '/games/:page',
    name: 'games list',
    component: () => import('../views/GamesView.vue')
  },
  {
    path: '/news/:page',
    name: 'news list',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/type/:id/:page',
    name: 'game of type',
    component: () => import('../views/GameOfType.vue')
  },
  {
    path: '/tag/:id/:page',
    name: 'game of tag',
    component: () => import('../views/GamesOfTag.vue')
  },
  {
    path: '/details/:id',
    name: 'details of app',
    component: () => import('../views/GameView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
