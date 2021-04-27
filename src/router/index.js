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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/user/profile',
    name: 'profile',
    component: () => import('../views/Perfil.vue')
  },
  {
    path: '/user/record',
    name: 'record',
    component: () => import('../views/Historial.vue')
  },
  {
    path: '/user/pending',
    name: 'pending',
    component: () => import('../views/Pending.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
