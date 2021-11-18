import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currForm: 1,
    prevForm: 0
  },
  mutations: {
    toNextForm (state) {
      state.prevForm = state.currForm
      if (state.currForm > 3) {
        state.currForm = 3
      } else {
        state.currForm++
      }
    },
    toPrevForm (state) {
      state.prevForm = state.currForm
      state.currForm--
    }
  },
  actions: {
  },
  modules: {
  }
})
