<template>
  <div>
    <button v-on:click="login">Login with FamilySearch!</button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>

<style scoped>
  button {
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>
