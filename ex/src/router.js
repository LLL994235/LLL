import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dong from './views/Name.vue'
import We from './views/We.vue'
import Detail from './views/detail.vue'
import News from './views/newsdetail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about/:id',
      name: 'about',
      component: About
    },
    {
      path: '/name',
      name: 'liu',
      component: Dong
    },
    {
      path: '/we',
      name: 'we',
      component: We
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail

    },
    {
      path: '/news/:id',
      name: 'news',
      component: News

      }
  ]
})
