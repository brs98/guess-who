<template>
  <div id="startWrapper" class="restrict-width">
    <div v-if="loading"><Spinner /></div>

    <div id="menu" v-else>
      <div id="bigLogo">
        <img :src="require('../assets/logo.png')" />
      </div>
      <h2>The get-to-know-your-ancestors game!</h2>
      
      <button class="ui-raised ui-pressable" @click="revealNewGame">New Game</button>
      <button class="ui-raised ui-pressable" @click="revealJoinGame">Join Game</button>
      
      <form v-if="subMenu==='join'" @submit.prevent="joinGame">
        <h3>Join A Game</h3>
        <input type="text" ref="roomToJoin" v-model="joinGameCode" placeholder="Enter game code" style="text-transform: uppercase; font-size: 1.2em" maxlength="5">
        <button role="submit" :disabled="joinGameCode.length < 5" class="ui-pressable ui-raised" style="background:green">GO!</button>
      </form>
      
      <form v-if="subMenu==='new'" @submit.prevent="startNewGame">
        <div v-if="!isLoggedIn">
          <p>You'll need to log in to FamilySearch first.</p>
          <button @click="login" style="background:green">Log in to FamilySearch</button>
        </div>
        <div v-else>
          <h3>Start A New Game</h3>
          <div>
            <label for="useCustomPid" style="padding:.8em; display:flex; justify-content:center; align-items:center; cursor:pointer;">
              <span>Use someone else's ancestors?</span>
              <input type="range"
                :style="`max-width:1.7em; transform:scale(1.5); filter: grayscale(${useCustomPid? 0:1}); pointer-events:none;`"
                :value="useCustomPid? 1:0" min="0" max="1" step="1"
              >
            </label>
            <input type="checkbox" id="useCustomPid" v-model="useCustomPid" hidden>
          </div>
          <input v-if="useCustomPid" type="text" v-model="customPid" placeholder="FamilySearch PID" style="text-transform: uppercase; font-size: 1.2em">
          <br><button role="submit" class="ui-pressable ui-raised" :disabled="!rootPid" style="background:green">GO!</button>
        </div>
      </form>

      <hr style="max-width: 20em; margin: 2em auto;">

      <details id="instructions">
        <summary>How To Start</summary>
        <ol>
          <li>Create a new game.</li>
          <div>Supply a valid FamilySearch PID to load ancestors of a different person.</div>
        
          <li>Have your opponent join.</li>
          <div>Use the Game Code from the next screen to join the game.</div>
        
          <li>Select your secret ancestor.</li>
          <div>Click on one of the cards and don't show your opponent!</div>

          <li>Have fun guessing!</li>
          <div>See <router-link to="/instructions">How To Play</router-link> for more instructions.</div>
        </ol>
      </details>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import GameData from "../../model/entities/GameData.js"
import {downloadTree} from '../store/helperFunctions';
import Spinner from "../components/Spinner.vue"

export default {
  name: 'Start',
  components: {
    Spinner
  },

  data: function() {
    return {
      state: this.$store.state,
      joinGameCode: "",
      subMenu: "",
      loading: false,
      useCustomPid: false,
      customPid: "",
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    rootPid() {
      return this.useCustomPid? this.customPid : this.state.person.pid;
    }
  },

  mounted() {
    if (sessionStorage.getItem("createGameOnReturn")) this.revealNewGame()
  },

  methods: {
    login() {
      this.loading = true;
      console.log("Logging in...")
      sessionStorage.setItem("createGameOnReturn","true")
      this.$store.dispatch('login');
    },

    async startNewGame() {
      this.loading = true;
      this.$store.commit("reset")
      sessionStorage.removeItem("createGameOnReturn")
      console.log("creating game");

      const tree = [];
      try {
        await downloadTree(tree,this.rootPid,this.state.fsToken)
      }
      catch (e) { 
        alert(e.message);
        this.loading = false;
        return;
      }
      const game = await axios.post(this.state.apiUrl+"/newgame",{tree}).then(res=>res.data.game)
      if (game) {
        this.$store.commit("setGameData",game)
        this.$router.push("play")
      }
      else alert("Could not create game!");
      this.loading = false;
    },


    async joinGame() {
      this.loading = true;
      this.$store.commit("reset")
      console.log("joining game "+this.joinGameCode)
      const game = await axios.get(this.state.apiUrl+"/games/"+this.joinGameCode.toLowerCase()).then(res=>res.data.game)
      if (game) {
        this.$store.commit("setGameData",game)
        this.$router.push("play")
      }
      else alert("Could not join game!");
      this.loading = false;
    },

    revealJoinGame() {
      this.subMenu = "join";
    },
    revealNewGame() {
      this.subMenu = "new";
    }
  },
}
</script>

<style scoped>
#startWrapper {
  padding:1em;
  padding-top: 4em;
  /* display: flex;
  place-content: center;
  place-items: center; */
}

#bigLogo img {
  width: 100%;
  max-width: 25rem;
}

#instructions {
  max-width:max-content;
  margin: 0 auto;
  text-align: center;
}

#instructions summary {
}

#instructions ol {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}

#instructions li {
  font-weight: bold;
  max-width: max-content;
  margin: 1em auto .5em auto;
}
</style>
