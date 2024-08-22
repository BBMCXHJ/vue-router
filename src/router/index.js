import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/product', component: ProductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;