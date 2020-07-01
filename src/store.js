import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sid: ' '
  },
  // mutations是唯一改变state的方法
  mutations: {
    setSid (state, value) {
      state.sid = value
    }
  },
  actions: {

  }
})
