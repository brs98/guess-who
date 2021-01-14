<template>
<div v-if="$store.state.game">
  <div id="gameCodeBar" class="ui-raised">
    <div class="restrict-width">
      Game Code: {{this.$store.state.game.id.toUpperCase()}}
    </div>
  </div>

  <div class="restrict-width">
    <div v-if="!$store.state.mysteryAncestor">
      <div class="board-section">  
        <h1>Select your Mystery Person!</h1>
        <CardsList @cardClick="enterGame"/>
      </div>
    </div>
    <div v-else>
        <div class="board-section" id="mysteryAncestorBox">
          <details open>
            <summary style="font-weight:bold; font-size: 1.2em; margin: .5em 0; outline:none;">Your Mystery Ancestor</summary>
            <AncestorCard v-if="$store.state.mysteryAncestor" :ancestor="$store.state.mysteryAncestor" :width="'20em'" :height="'25em'" />
          </details>
        </div>
      </div>

      <div class="board-section" v-if="$store.state.mysteryAncestor">
        <button style="pointer-events: none">Guess your opponent's person!</button>
      
        <!-- <div v-if="makingGuess === false">
          <button @click="makingGuess = true">Make a guess</button>
        </div>
        <div v-else>
          <h1>Who do you think is your opponent's Mystery Ancestor?</h1
          +/>
          <button class="noButton" @click="makingGuess = false;">Cancel</button>
          <h3>or select an ancestor</h3>
          <div class="ancestors">
          <div class="ancestor" v-for="ancestor in ancestors" :key="ancestor.id">
              <button @click="selectAncestor(ancestor)">{{ancestor.name}}</button>
              <div id="areYouSure" v-show="ancestor.selected === true">
              <h3>Are you sure you want to select {{ancestor.name}}?</h3>
              <button id="yesButton" @click="winOrLose(ancestor)">Yes</button>
              <button class="noButton" @click="ancestor.selected = false">No</button>
              </div>
            </div>
          </div>
        </div> -->

      <CardsList @cardClick="flipCard" />

    </div>
  </div>
  
</div>
</template>

<script>
  import CardsList from '../components/CardsList.vue';
  import AncestorCard from "../components/AncestorCard.vue"

  import { mapState } from 'vuex';
  export default {
    name: 'Board',
    components: {
      CardsList,
      AncestorCard
    },
    data: function() {
      return {
        mysteryAncestor: null,
        makingGuess: false,
        yesButtonClicked: false
      }
    },
    computed: mapState({
      ancestors: state => state.person.tree
    }),
    methods: {
      flipCard(ancestor) {
        ancestor.flipped = !ancestor.flipped
      },
      winOrLose(ancestor) {
        alert(ancestor.name + ' was the Mystery Ancestor or you just lost')
      },
      enterGame(ancestor) {
        this.$store.commit("setMysteryAncestor",ancestor);
        let ctx = this;
        this.$nextTick(()=>{
          alert('The youngest player goes first. Have fun!');
          ctx.flipAll(false,true);
        })
      },

      flipAll(toFlipped=true,animate=false) {
        let offset = 50;
        for (let i in this.$store.state.game.tree) {
          let p = this.$store.state.game.tree[i]
          setTimeout(()=>p.flipped = toFlipped, animate? offset*i : 0);
        }
      }
    },
    beforeMount() {
      if (!this.$store.state.game.tree) this.$router.push("/")
      if (!this.$store.state.mysteryAncestor) this.flipAll();
    }
  }
</script>

<style scoped>
  #gameCodeBar {
    font-weight: bold;
    padding: .5em;
    background-color: #fff;
    font-size:1.2em;
  }

  .board-section {
    margin:.5em;
  }

  #mysteryAncestorBox {
    border: 3px solid;
    border-radius: 4px;
  }

  #yesButton, .noButton {
    width: 200px;
    margin: 12px;
  }

  .noButton {
    background-color: #ba251a;
  }

  .noButton:hover {
    background-color: #e34034;
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

  #areYouSure {
    margin-top: 50px;
    margin-bottom: 50px;
  }

</style>
