import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('views/home/index.vue')
    },
    {
      path: '/login',
      component: () => import('views/login/index.vue')
    }
  ]
})

export default router