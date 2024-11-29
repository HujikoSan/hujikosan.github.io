import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/Index.vue'

const defaultTitle = 'くぁwせdrftgy'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      meta: { title: 'about' },
      component: () => import('./components/About.vue'),
    },
    {
      path: '/anniversary',
      meta: { title: '記念日' },
      component: () => import('./components/Anniversary.vue'),
    },
    {
      path: '/:catchAll(.*)',
      meta: { title: '404' },
      component: () => import('./components/NotFound.vue'),
    },
  ]
})
router.afterEach((to, from) => {
  document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle
})

export default router
