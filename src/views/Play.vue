<template>
<div>
  <div id="gameCodeBar" class="ui-raised">Game Code: {{this.$store.state.game.id.toUpperCase()}}</div>

  <div v-if="!mysteryAncestor">
     <div class="board-section">  
      <h1>Select your Mystery Ancestor!</h1>
      <PreselectionCards @clicked="enterGame"/>
    </div>
  </div>
  <div v-else>
      <div class="board-section" id="mysteryAncestorBox">
        <details open>
          <summary style="font-weight:bold; font-size: 1.2em; margin: .5em 0; outline:none;">Your Mystery Ancestor</summary>
          <AncestorCard v-if="mysteryAncestor" :ancestor="mysteryAncestor" :width="'20em'" :height="'20em'" />
        </details>
      </div>
    </div>

    <div class="board-section" v-if="mysteryAncestor">
      <button>Guess your opponent's ancestor!</button>
    
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

    <Cards @cardClick="handleCardClick" />

  </div>
</div>
</template>

<script>
  import Cards from '../components/Cards.vue';
  import PreselectionCards from '../components/PreselectionCards.vue';
  import AncestorCard from "../components/AncestorCard.vue"

  import { mapState } from 'vuex';
  export default {
    name: 'Board',
    components: {
      Cards,
      PreselectionCards,
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
      handleCardClick(ancestor) {
        console.log(ancestor)
      },
      winOrLose(ancestor) {
        alert(ancestor.name + ' was the Mystery Ancestor or you just lost')
      },
      enterGame(ancestor) {
        this.mysteryAncestor = ancestor;
        alert('The youngest player goes first. Have fun!');
      }
    },
    mounted() {
      if (!this.$store.state.game.tree) this.$router.push("/")
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
