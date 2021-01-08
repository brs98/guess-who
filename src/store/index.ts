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
    mysteryAncestorSelected: false,
    person: {
      pid: '',
      tree: [
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false },
        { name: '', image: '', lifespan: '', placeOfBirth: '', placeOfDeath: '', gender: '', pid: '', flipped: false, selected: false, mysteryAncestor: false }
      ],
      mysteryAncestor: {}
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
      state.mysteryAncestorSelected = false;
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
    },
    deselectAllAncestors: state => {
      for (let i = 0; i < 15; i++) {
        state.person.tree[i].selected = false;
      }
    },
    separateMysteryAncestor: state => {
      for (let i = 0; i < 15; i++) {
        if (state.person.tree[i].mysteryAncestor === true) {
          console.log('Assigned mysteryAncestor')
          state.person.mysteryAncestor = state.person.tree[i];
        }
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
    },
    deselectAllAncestors: context => context.commit('deselectAllAncestors'),
    separateMysteryAncestor: context => context.commit('separateMysteryAncestor')
  },
  getters : {
    isLoggedIn: state => !!state.token
  }
})
