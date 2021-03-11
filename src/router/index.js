import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '@/components/Top.vue'
import Profile from '@/components/Profile.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'

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
