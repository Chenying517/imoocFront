import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/veevalidate.js'
// import './local/index'

// method1 to zh-cn
// Validator.localize('zh-CN', zh)

// method2 to zh-cn

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
