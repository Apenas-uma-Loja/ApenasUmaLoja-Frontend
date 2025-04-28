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
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/CartView.vue'),
      // props: true,
    },
    {
      path: '/feed',
      name: 'Feed',
      component: () => import('@/views/FeedProduct.vue'),
    },
  ],
})

export default router
