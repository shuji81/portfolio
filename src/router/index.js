import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/views/Top.vue'
import Profile from '@/views/Profile.vue'
import Skills from '@/views/Skills.vue'
import Contact from '@/views/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      component:Top
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/skills',
      component:Skills
    },
    {
      path:'/contact',
      component:Contact
    }
  ]
})

export default router
