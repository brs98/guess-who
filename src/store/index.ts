import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('user-token') || '',
    status: '',
  },
  plugins: [createPersistedState()],
  mutations: {
    login: () => {
      sessionStorage.setItem('user-token', 'good');
      axios.get('https://auth.fhtl.byu.edu'+'?redirect=' + window.location.origin + '/&site=key').then((res) => {
        window.location = res.request.responseURL;
      }).catch((res) => {
        console.log(res);
      });
    },
    logout: () => {
      sessionStorage.removeItem('user-token');
      /**
      $.ajax({
         url:"https://api.familysearch.org/platform/logout",
         headers: {
             "Authorization":"Bearer " + this.getAccessToken()
         },
         type:"POST",
         success: function(result){
               console.log(result);
               sessionStorage.setItem("token", "bad");
               this.state = {};
         },
         error:function(error){
               console.log(error)}
         })
         */
    }
  },
  actions: {
    login: context => context.commit('login'),
    logout: context => context.commit('logout')
  },
  getters : {
    isLoggedIn: state => !!state.token,
  }
})
