import { useStatoAvanzamentoStore } from '@/stores/statoAvanzamento'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
    },
    {
      path: '/config-bottle',
      children: [
        {
          path: 'step-:id',
          name: 'config',
          component: () => import('@/views/ConfigBottleView.vue'),
        },
      ],
    },
    {
      path: '/greetings',
      name: 'greetings',
      component: () => import('@/views/EndingView.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const statoAvanzamento = useStatoAvanzamentoStore()
  if(to.name === 'welcome') return
  if (statoAvanzamento.isCompleted) {
    return { name: 'welcome' }
  }
})

export default router
