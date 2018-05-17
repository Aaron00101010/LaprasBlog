import Vue from 'vue'
import Router from 'vue-router'

import PHomePage from '@/components/page/PHomePage'
import PLogin from '@/components/page/PLogin'

Vue.use(Router)

const routes = [
  {
    name: 'homePage',
    path: '/',
    component: PHomePage
  },
  {
    name: 'login',
    path: '/login',
    component: PLogin
  }
]

export default new Router({
  routes
})
