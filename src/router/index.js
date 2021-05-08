import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      component: () => import('@/views/Top.vue')
    },
    {
      path:'/profile',
      component: () => import('@/views/Profile.vue')
    },
    {
      path:'/history',
      component: () => import('@/views/History.vue')
    },
    {
      path:'/skills',
      component: () => import('@/views/Skills.vue')
    },
    {
      path:'/contact',
      component: () => import('@/views/Contact.vue')
    }
  ]
})

export default router
