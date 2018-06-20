import Vue from 'vue'
import Router from 'vue-router'

import PArticalList from '@/views/PArticalList'
import PArtical from '@/views/PArtical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articalList',
      component: PArticalList
    },
    {
      path: '/artical/:id',
      name: 'artical',
      component: PArtical
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return savePosition
  }
})
