// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import './css/common.scss'
import customAxios from './utils/customAxios'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(VueContentPlaceholders)

Vue.config.productionTip = false

Vue.prototype.$axios = customAxios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
