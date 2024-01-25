import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/en'
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/en/cart',
      name: 'cart-en',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/en/product/:id',
      name: 'product-en',
      component: () => import('../views/ProductView.vue')
    }
  ]
})

export default router
