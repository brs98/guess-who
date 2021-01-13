<template>
  <div>
    <button @click="startNewGame">New Game</button>
    <button @click="joinGame">Join Game</button>
  </div>
</template>

<script>
import axios from 'axios';
import GameData from "../../model/entities/GameData.js"
import CreateGameRequest from "../../model/server/req-res/CreateGameRequest.js"
import {downloadTree} from '../store/helperFunctions';

export default {
  name: 'Start',
  data: function() {
    return {
      state: this.$store.state,
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },

  mounted() {
    if (sessionStorage.getItem("createGameOnReturn")) this.startNewGame()
  },

  methods: {
    async startNewGame() {
      if (!this.isLoggedIn) {
        console.log("Logging in...")
        sessionStorage.setItem("createGameOnReturn","true")
        this.$store.dispatch('login');
        return;
      }
      sessionStorage.removeItem("createGameOnReturn")
      console.log("creating game");

      const tree = [];
      await downloadTree(tree,this.state.person.pid,this.state.fsToken)
      const game = await axios.post(this.state.apiUrl+"/newgame",{tree}).then(res=>res.data.game)
      this.$store.commit("setGameData",game)
      this.$router.push("play")
    },
    joinGame() {
      console.log("joining game")
    }
  },
}
</script>

<style scoped>
</style>
