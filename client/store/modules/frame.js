import * as types from '../mutation-types'

const state = {
  url: ''
}

const getters = {
  url: state => state.url
}

const actions = {
  changeUrl({ commit, state }, url) {
    commit(types.CHANGE_FRAME_URL, { url })
  }
}

const mutations = {
  [types.CHANGE_FRAME_URL] (state, { url }) {
    state.url = url
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
