import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import JWTDecode from 'jwt-decode';
import GameData from "../../model/entities/GameData.js"

//STORE STARTS HERE

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: process.env.NODE_ENV==="development"? "http://localhost:5000/api" : "/api",
    fsToken: "",
    playerCodes: {
      playerOne:"playerOne",
      playerTwo: "playerTwo"
    },
    mysteryAncestor: null,
    person: {
      pid: '',
      playerCode: "",
    },
    game: new GameData()
  },
  mutations: {
    logout: state => {
      state.fsToken = '';
      state.person.pid = '';
      state.game = new GameData();
    },
    reset(state) {
      state.person.playerCode = "";
      state.game = new GameData();
      state.mysteryAncestor = null;
    },
    setGameData(state,data) {
      state.game = data;
    },
    setMysteryAncestor(state,ancestor) {
      state.mysteryAncestor = ancestor;
    }
  },
  actions: {
    determineLoginStatus(context) {
      const codedToken = new URLSearchParams(window.location.search).get("fstoken");
      let decodedToken;
      if (codedToken != undefined) {
        decodedToken = JWTDecode(codedToken);
        context.state.person.pid = decodedToken.fs_user.pid;
        context.state.fsToken = decodedToken.fs_access_token;
      }
      else {
        console.log('User is not logged in!');
      }
    },
    login: () => {
      axios.get('https://auth.fhtl.byu.edu'+'?redirect=' + window.location.origin + '/&site=key').then((res) => {
        window.location = res.request.responseURL;
      }).catch((err) => {
        console.log(err);
      });
    },
    logout({commit}){
      return new Promise<void>((resolve) => {
        commit('logout')
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
    isLoggedIn: state => !!state.fsToken
  }
})
