<template>
  <div class="wrapper">
    <div class="ancestors">
      <div class="ancestor" v-for="ancestor in ancestors" :key="ancestor.id" @click="cardClick(ancestor)">
        <div class="info" v-bind:style="ancestor.flipped?backOfCard:frontOfCard">
          <img :src="ancestor.image" key="ancestorImage">
          <h1 v-bind:style="frontName">{{ancestor.name}}</h1>
          <div class="data" v-bind:style="frontInfo">
            <h2>Gender: {{ancestor.gender}}</h2>
            <h2>Lifespan: {{ancestor.lifespan}}</h2>
            <h2>Place of Birth: {{ancestor.placeOfBirth}}</h2>
            <h2>Place of Death: {{ancestor.placeOfDeath}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "CardsList",
    computed: mapState({
      ancestors: state => state.game.tree
    }),
    data() {
      return {
        backOfCard: {
          transform: 'rotateY(180deg)',
          transition: '.75s',
        },
        frontOfCard: {
          transition: '.75s',
        },
        frontInfo: {
          transitionDelay: '.25s'
        },
        frontName: {
          transitionDelay: '.25s',
        }
      }
    },
    methods: {
      cardClick(ancestor) {
        this.$emit('cardClick', ancestor)
      }
    }
  }
</script>

<style scoped>

.wrapper {
  display: inline-block;
  perspective: 1000px;
}

h1 {
  margin: 0px;
  font-size: 90%;
  color: green;
}

.data {
  font-size: 50%;
  background-color: #C2DEFC;
  color: #2b8643;
}

.ancestor {
  width: 20%;
  margin: auto;
  display: inline-block;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  perspective: 600px;
}

.info {
    border-style: solid;
    border-width: 5px;
    border-radius: 12px;
    border-color: #C2DEFC;
    margin: 10px;
    transition: transform 1s;
    transform-style: preserve-3d;
    transition: border-color .5s;
  }

.info:hover {
  border-color: #2b8643;
  cursor: pointer;
}

img {
  margin-top: 10px;
  border-radius: 12px;
  width: 15vw;
  height: 35vh;
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  .ancestor {
    width: 33%;
  }
  img {
    width: 18vw;
    height: 18vh;
  }
}

</style>
