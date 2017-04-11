import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
// import Observable from 'rxjs/Observable'
// import Subscription from 'rxjs/Subscription'
// import VueRx from 'vue-rx'
import 'muse-components/styles/base.less'

Vue.use(VueRouter)
// Vue.use(VueRx, { Observable, Subscription })

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
