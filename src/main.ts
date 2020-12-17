import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Ancestors from './Ancestors.js'

Vue.config.productionTip = false

const data = {
  Ancestors: Ancestors
}

new Vue({
  router,
  store,
  data,
  render: h => h(App)
}).$mount('#app')
