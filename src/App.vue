<template>
  <div id="app">
    <div id="nav" class="ui-raised">
      <div id="navLogo">
        <img :src="require('./assets/logo.png')" />
      </div>
      <div id="navLinks">
        <router-link to="/">Home</router-link> |
        <router-link to="/instructions">How To Play</router-link>
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
}

body {
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

#nav {
  padding: 1em;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--theme);
  position: relative;
  z-index: 5;
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

i.material-icons {
  font-size: inherit;
}
button i.material-icons {
  margin: 0 .25em;
  font-size: 1.25em;
}

[disabled="disabled"] {
  pointer-events: none;
  opacity: .5;
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
    box-shadow: 3px 3px 5px 0px #0004;
    transform: translateY(-1px);
}
.ui-raised.ui-pressable:active {
    box-shadow: 1px 2px 4px 0px #0005;
    transform: translateY(0px);
}
.ui-shiny {
  position: relative;
  outline: none;
  user-select: none;
}
.ui-shiny::after {
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(45deg, transparent 32%, rgba(255, 255, 255, 0.2) 40%, transparent 50%, transparent 52%, rgba(255, 255, 255, 0.25) 57%, transparent 69%);
  background-position: 10% 50%;
  background-size: 300% 300%;
  transition: background-position 300ms;
}
.ui-shiny.ui-pressable:hover::after, .ui-shiny.ui-pressable:focus::after, .ui-shiny.ui-shift-shiny::after {
  animation: shiny-background-hover 20000ms ease-out infinite;
}
.ui-shiny:not(:hover)::after {
  animation: shiny-background-glimmer 20000ms ease-out infinite;
}


@keyframes shiny-background-glimmer {
  0% { background-position: 10% 50% }
  5% { background-position: 160% 50% }
  100% { background-position: 160% 50% }
}
@keyframes shiny-background-hover {
  0% { background-position: 10% 50% }
  5% { background-position: 160% 50% }
  100% { background-position: 160% 50% }
}

@keyframes pulse {
  from {transform: scale(1) }
  to {transform: scale(1.2) }
}


@keyframes fade-in {
  from {opacity:0; }
  to {opacity:1; }
}


</style>
