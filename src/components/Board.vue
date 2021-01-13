<template>
  <div class="board">
    <div v-if="this.$store.state.mysteryAncestorSelected === false">
      <h1>Select your Mystery Ancestor!</h1>
      <PreselectionCards @clicked="enterGame"/>
    </div>
    <div v-else>
      <div v-if="guessButtonClicked === false">
        <button  @click="guessButtonClicked = true">Make a guess</button>
        <Cards />
      </div>
      <div v-else>
        <h1>Who do you think is your opponent's Mystery Ancestor?</h1>
        <button class="noButton" @click="guessButtonClicked = false; deselectAllAncestors()">Cancel</button>
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
      </div>
    </div>
  </div>
</template>

<script>
  import Cards from './Cards.vue';
  import PreselectionCards from './PreselectionCards.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'Board',
    components: {
      Cards,
      PreselectionCards
    },
    data: function() {
      return {
        guessButtonClicked: false,
        yesButtonClicked: false
      }
    },
    computed: mapState({
      ancestors: state => state.person.tree
    }),
    methods: {
      selectAncestor(ancestor) {
        ancestor.selected = true;
      },
      deselectAllAncestors() {
        this.$store.dispatch('deselectAllAncestors');
      },
      winOrLose(ancestor) {
        alert(ancestor.name + ' was the Mystery Ancestor or you just lost')
      },
      enterGame(value) {
        this.$store.state.mysteryAncestorSelected = value;
        this.$store.dispatch('separateMysteryAncestor');
        alert('The youngest player goes first. Have fun!');
      }
    }
  }
</script>

<style scoped>
  .board {
    border-style: solid;
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
