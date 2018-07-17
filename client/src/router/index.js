import Vue from 'vue'
import Router from 'vue-router'

import PArticalList from '@/views/PArticalList'
import PArtical from '@/views/PArtical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/artical/:id',
      component: PArtical
    },
    {
      path: '/articalList/:page',
      name: 'articalList',
      component: PArticalList
    },
    {
      path: '*',
      redirect: { name: 'articalList', params: { page: 1 } }
    }
  ],
  scrollBehavior () {
    return { y: 0 }
  }
})
