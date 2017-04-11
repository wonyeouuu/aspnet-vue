import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import loading from './modules/loading'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    nav,
  }
})
