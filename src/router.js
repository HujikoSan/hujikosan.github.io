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
      path: '/todo',
      component: () => import('./components/Todo.vue'),
    },
  ]
})
