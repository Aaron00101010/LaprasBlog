// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import store from '@/store/'
import router from '@/router/'

import App from '@/App'

Vue.config.productionTip = false

Vue.use(ElementUI)

axios.defaults.baseURL = 'http://localhost:8527'
axios.interceptors.request.use(null, (e) => console.log(e))
axios.interceptors.response.use(null, (e) => console.log(e))
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
