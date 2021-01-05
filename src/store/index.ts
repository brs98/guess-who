import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('userToken') || '',
    status: '',
  },
  mutations: {
    login: () => {
      axios.get('https://auth.fhtl.byu.edu'+'?redirect=' + window.location.origin + '/&site=key').then((res) => {
        window.location = res.request.responseURL;
      }).catch((res) => {
        console.log(res);
      });
      sessionStorage.setItem('userToken', 'good');
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    login: context => context.commit('login'),
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        sessionStorage.removeItem('userToken')
        delete axios.defaults.headers.common['Authorization']
        resolve()
        window.location = '/#/'
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token
  }
})
