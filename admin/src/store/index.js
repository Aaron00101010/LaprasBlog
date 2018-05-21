import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import artical from './artical'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    artical
  }
})
