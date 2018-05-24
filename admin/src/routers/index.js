import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/'

import PHomePage from '@/components/page/PHomePage'
import PEditor from '@/components/page/PEditor'
import PLogin from '@/components/page/PLogin'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/home',
    component: PHomePage,
    children: [
      {
        name: 'editor',
        path: '/editor',
        component: PEditor
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: PLogin
  },
  {
    path: '*',
    component: {
      template: '<h3>404</h3>'
    }
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.state.user.isLogin === false) {
    next({
      name: 'login',
      replace: true
    })
  } else {
    next()
  }
})

export default router
