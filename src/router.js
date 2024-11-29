import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      component: () => import('./components/About.vue'),
    },
    {
      path: '/anniversary',
      component: () => import('./components/Anniversary.vue'),
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('./components/NotFound.vue'),
    },
  ]
})
