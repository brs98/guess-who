<template>
  <div class="container">
    <h1>Ancestor Guess Who?</h1>
    <button v-on:click="login">Login with FamilySearch!</button>
    <div class="logos">
      <img id="cs-logo" src="../../public/images/cs-logo.png"/>
      <img id="fhtl-logo" src="../../public/images/fhtl-logo.png"/>
    </div>
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
    },
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-style: solid;
    border-radius: 4px;
  }

  #cs-logo {
    width: 15vw;
  }

  #fhtl-logo {
    width: 30vw;
  }

  .logos {
    padding: 24px;
  }

  button {
    text-transform: uppercase;
    color: white;
    margin-top: 8px;
    border: none;
    cursor: pointer;
    padding: 12px;
    width: 400px;
    background-color: #2b8643;
    max-width: calc(100% - 4px);
    margin-bottom: 10px;
    border-radius: 4px;
  }

  button:hover {
    background-color: #3ba663;
  }

  h1 {
    font-size:48px;
  }
</style>
