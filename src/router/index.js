import Vue from 'vue'
import VueRouter from 'vue-router'
import Checkout from '@/views/Checkout.vue'
import NotFound from '@/views/NotFound.vue'
import MainPage from '@/views/MainPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: MainPage
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: () => import('@/views/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('@/views/SignUp.vue')
  },
  {
    path: '/users/:id/checkout',
    name: 'user-checkout',
    component: Checkout,
    redirect: '/users/:id/checkout/1',
    children: [
      {
        path: '1',
        name: 'first-form',
        component: () => import('@/views/FirstForm.vue')
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
