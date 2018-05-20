import Vue from 'vue'
import Router from 'vue-router'

import PHomePage from '@/components/page/PHomePage'
import PEditor from '@/components/page/PEditor'
<<<<<<< HEAD

=======
>>>>>>> dev
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
        path: 'editor',
        component: PEditor
      }
    ]
  },
  {
    name: 'login',
    path: '/',
    component: PLogin
  }
]

export default new Router({
  routes
})
