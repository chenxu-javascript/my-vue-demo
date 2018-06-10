import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  conter: 33,
  todos: [
    { id: 1, name: 'cx', done: false },
    { id: 2, name: 'cxcx', done: true },
    { id: 3, name: 'cx', done: false },
    { id: 4, name: 'cxcx', done: true }
  ]
}

export default new Vuex.Store({
  state,
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state, n) {
      // 变更状态
      if (n) {
        state.conter += n
      } else {
        state.conter++
      }
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    }
  }
})
