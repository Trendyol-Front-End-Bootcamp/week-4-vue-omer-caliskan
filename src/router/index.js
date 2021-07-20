import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/starship/:id',
    name: 'Details',
    component: () => import('../views/Details.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
