import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductListView from '@/views/ProductListView.vue'
import ProductDetail from '@/views/ProductDetail.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/productlist', component: ProductListView },
  { path: '/productlist/detail/:id', component: ProductDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;