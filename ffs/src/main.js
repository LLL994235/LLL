import Vue from 'vue'
import App from './App.vue'
import RES from 'vue-resource'

Vue.config.productionTip = false
Vue.use(RES)
new Vue({
  render: h => h(App)
}).$mount('#app')
