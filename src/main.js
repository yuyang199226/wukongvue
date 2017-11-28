// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// import 'jquery/dist/jquery.min.js'
 import 'bootstrap/dist/css/bootstrap.min.css'
//import '../static/bootstrap/css/bootstrap.css'//我的bootstrap ，是通过复制bootstrap文件的，测试用

import axios from "axios"
Vue.prototype.$axios = axios
// import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
