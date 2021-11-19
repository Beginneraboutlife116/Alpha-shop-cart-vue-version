import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currForm: 1
  },
  mutations: {
    updateCurrentForm (state, payload) {
      state.currForm = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
