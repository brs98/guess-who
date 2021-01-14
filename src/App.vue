<template>
  <div id="app">
    <div id="navWrapper" class="ui-raised">
      <div id="nav" class="restrict-width">
        <div id="navLogo">
          <img :src="require('./assets/logo.png')" />
        </div>
        <div id="navLinks">
          <router-link to="/">Home</router-link> |
          <router-link to="/instructions">How To Play</router-link>
        </div>
      </div>
    </div>

    <router-view/>
  
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    created() {
      return this.$store.dispatch("determineLoginStatus");
    },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
    methods: {
    }
  }
</script>

<style>
:root {
  --theme: #1f7ddf;
  font-size: 14px;
}

body {
  font-size: 1rem;
  margin: 0;
  background-image: url("./assets/bg-tile.png");
  background-attachment: fixed;
}

#app {
  font-size: 14px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#navWrapper {
  background: var(--theme);
  position: relative;
  z-index: 5;
}

#nav {
  padding: 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


#navLogo img {
  width: 6em;
}

#nav a {
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: #fff
}

#nav a.router-link-exact-active {
  text-decoration: underline;
}





input {
  font-size: .80em;
  padding: .25em;
  margin: 0 .25em;
  max-width: 100%;
  flex-grow: 1;
}

input[type="number"] {
  text-align: right;
  width: 3em;
}

input[type="range"] {
  padding: 0;
  -webkit-appearance: none;
  appearance: none;
  height: .4em;
  outline: none;
  border-radius: 1em;
  background: var(--theme);
  flex-grow: 1;
  margin: 0 1em;
}
::-webkit-slider-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: 1em;
  height: 1em;
  background: #fff;
  box-shadow: 0 0 2px #000;
  border-radius: 2em;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  -webkit-appearance: none; 
  appearance: none;
  width: 1em;
  height: 1em;
  background: #fff;
  box-shadow: 0 0 2px #000;
  border-radius: 2em;
  cursor: pointer;
}
.form-row input[type="range"] {
  width: 100%;
}


button, .button {
  border: none;
  padding: .5em 1em;
  font-weight: bold;
  color: white;
  background-color: var(--theme);
  margin: .5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  user-select: none;
  cursor:pointer;
}
button.inline, .button.inline {
  display: inline-flex;
  margin: 0;
  padding: .5em .5em;
  font-size: .8em;
}

[disabled="disabled"] {
  pointer-events: none;
  opacity: .5;
}

.restrict-width {
  max-width: 60rem;
  margin: 0 auto;
}


.ui-pressable {
  cursor: pointer;
  outline: none;
}
.ui-raised, .ui-block {
  box-shadow: 1px 1px 3px #0005;
}
img.ui-raised {
  filter: drop-shadow(1px 1px 3px #0004);
  box-shadow: none;
}
.ui-raised.ui-pressable:hover, .ui-raised.ui-pressable:focus {
    box-shadow: 3px 3px 5px 1px #0004;
    transform: translateY(-1px) scale(1.05);
}
.ui-raised.ui-pressable:active {
    box-shadow: 1px 2px 4px 0px #0005;
    transform: translateY(0px);
}


</style>
