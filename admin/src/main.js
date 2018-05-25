// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import customAxios from '@/utils/customAxios'

import store from '@/store/'
import router from '@/routers/'

import App from '@/App'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = customAxios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
