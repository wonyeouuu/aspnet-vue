import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-components/styles/base.less'

Vue.use(VueRouter)

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
