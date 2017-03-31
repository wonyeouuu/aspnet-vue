import * as types from '../mutation-types'

const state = {
  show: false
}

const getters = {
  show: state => state.show
}

const actions = {
  toggleNav({ commit, state }, newStatus) {
    commit(types.TOGGLE_NAV, { newStatus })
  }
}

const mutations = {
  [types.TOGGLE_NAV] (state, { newStatus }) {
    if (typeof newStatus === 'undefined') {
      state.show = !state.show
    }
    state.show = newStatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
