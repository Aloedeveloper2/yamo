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
    path: '/produits',
    name: 'Products',
    component: Home
  },
  {
    path: '/payments',
    name: 'Payments-mode',
    component: Home
  },
  {
    path: '/tarifs',
    name: 'Tarifs',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
