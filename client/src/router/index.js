import Vue from 'vue'
import Router from 'vue-router'

import PArticalList from '@/views/PArticalList'
import PArtical from '@/views/PArtical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: PArticalList
    },
    {
      path: '/artical/:id',
      component: PArtical
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return savePosition
  }
})
