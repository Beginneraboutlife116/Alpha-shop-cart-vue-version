import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '@/views/Checkout.vue'
import NotFound from '@/views/NotFound.vue'
import FirstForm from '@/views/FirstForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/checkout/1'
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    children: [
      {
        path: '1',
        name: 'first-form',
        component: FirstForm
      },
      {
        path: '2',
        name: 'second-form',
        component: () => import('@/views/SecondForm.vue')
      },
      {
        path: '3',
        name: 'third-form',
        component: () => import('@/views/ThirdForm.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
