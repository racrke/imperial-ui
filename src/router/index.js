import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
  },
    {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/account',
    name: 'profile',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/record',
    name: 'record',
    component: () => import('../views/Historial.vue')
  },
  {
    path: '/pending',
    name: 'pending',
    component: () => import('../views/Pending.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
