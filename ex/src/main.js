import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Src  from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.config.productionTip = false
Vue.use(Src)
Vue.use(VueAwesomeSwiper)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
