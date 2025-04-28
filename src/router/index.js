import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product/:productId',
      name: 'ProductDetail',
      component: () => import('../views/ProductDetailview.vue'),
      props: true,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/feed',
      name: 'FeedProducts',
      component: () => import('../views/FeedProductsView.vue'),
    }
  ],
})

export default router
