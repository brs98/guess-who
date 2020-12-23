<template>
  <div id="app" v-if="isLoggedIn">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/instructions">How To Play</router-link>
      <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
    </div>
    <router-view/>
  </div>
  <div v-else>
    <Login />
  </div>
</template>

<script>
  import Login from './views/Login.vue';
  export default {
    name: 'App',
    components: {
      Login
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #78b7fa;
}
</style>
