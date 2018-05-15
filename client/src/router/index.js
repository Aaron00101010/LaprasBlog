import Vue from 'vue'
import Router from 'vue-router'

import PArticalList from '@/components/page/PArticalList'
import PArtical from '@/components/page/PArtical'
import PAbout from '@/components/page/PAbout'
import PArchive from '@/components/page/PArchive'
import PTags from '@/components/page/PTags'

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
    },
    {
      path: '/about',
      name: 'about',
      component: PAbout
    },
    {
      path: '/archive',
      name: 'archive',
      component: PArchive
    },
    {
      path: '/tags',
      name: 'tags',
      component: PTags
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return savePosition
  }
})
