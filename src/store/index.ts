import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '', //change to "token: getCookie..."
    isLoggedIn: false //delete this and change the getter for isLoggedIn after adding token functionality
  },
  plugins: [createPersistedState()],
  mutations: {
    login: state => state.isLoggedIn = true, //modify to actual login process
    logout: state => state.isLoggedIn = false //modify to actual logout process

  },
  actions: {
    login: context => context.commit('login'),
    logout: context => context.commit('logout')
  },
  getters : {
    isLoggedIn: state => !!state.isLoggedIn, //change !!state.isLoggedIn to !!state.token after adding token functionality
  }
})
