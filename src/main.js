import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'

import toast from './components/common/toast/index'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
FastClick.attach(document.body)

Vue.use(LazyLoad,{
  loading: require('../src/assets/img/svg/mineactive.svg')
})

Vue.use(toast)
import {request} from '@/network/request.js'

new Vue({
  router,
  request,
  store,
  render: h => h(App),
}).$mount('#app')
