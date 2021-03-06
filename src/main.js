// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
var app4 = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
window.app4 = app4
