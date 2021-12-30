import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

import {request} from './network/request.js'

new Vue({
  router,
  request,
  render: h => h(App),
}).$mount('#app')
