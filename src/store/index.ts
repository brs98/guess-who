import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import JWTDecode from 'jwt-decode';
import * as HelperFunctions from './helperFunctions';

//STORE STARTS HERE

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fsToken: '',
    token: sessionStorage.getItem('userToken') || '',
    person: {
      pid: '',
      tree: []
    }
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
    logout: state => {
      state.fsToken = '';
      state.token = '';
      state.person.pid = '';
      state.person.tree = [];
    },
    setPlayerInfo: state => {
      const codedToken = window.location.search.split("=")[1];
      let decodedToken;
      if (codedToken != undefined) {
        decodedToken = JWTDecode(codedToken);
        state.person.pid = decodedToken.fs_user.pid;
        state.fsToken = decodedToken.fs_access_token;
        HelperFunctions.downloadTree(state);
      }
      else {
        console.log('The codedToken did not work');
        console.log('codedToken value: ' + codedToken);
      }
    }
  },
  actions: {
    login: context => {
      context.commit('login')
    },
    logout({commit}){
      return new Promise((resolve) => {
        commit('logout')
        sessionStorage.removeItem('userToken')
        delete axios.defaults.headers.common['Authorization']
        resolve()
        window.location.replace('/#/')
      })
    },
    setPlayerInfo: context => {
      context.commit('setPlayerInfo')
    }
  },
  getters : {
    isLoggedIn: state => !!state.token
  }
})
