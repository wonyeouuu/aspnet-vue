import * as types from '../mutation-types'

const state = {
  loading: false
}

const getters = {
  loading: state => state.loading
}

const actions = {
  changeLoading({ commit, state }, newStatus) {
    commit(types.CHANGE_LOADING, { newStatus })
  }
}

const mutations = {
  [types.CHANGE_LOADING] (state, { newStatus }) {
    state.loading = newStatus
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
