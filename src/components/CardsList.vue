<template>
  <div class="wrapper">
    <div class="ancestors">
      <AncestorCard v-for="ancestor in ancestors" :key="ancestor.id"
        :ancestor="ancestor" :width="'10em'" :height="'17em'" :flippable="true"
        @cardClick="cardClick" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import AncestorCard from "./AncestorCard.vue"

  export default {
    name: "CardsList",
    components: { AncestorCard },

    computed: mapState({
      ancestors: state => state.game.tree
    }),
    data() {
      return {
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

.card {
  width: 11em;
  height: 20em;
  margin: .4em;
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
}

.flip-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow:hidden;
  transition: transform 1s;
  transform-style: preserve-3d;
  transition: border-color .5s;
  transition: .75s; 
}
.flip-wrapper.flipped {
  transform: rotateY(180deg);
}

.info {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow:hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: #C2DEFC;
  transition: transform 1s;
  transform-style: preserve-3d;
  transition: border-color .5s;
}

.info:hover {
  border-color: #2b8643;
  cursor: pointer;
}

img {
  width: 100%;
  flex-grow:1;
  object-fit: cover;
}

.card-title {
  margin: .5em 0;
  font-size: 1.1em;
  color: green;
  font-weight: bold;
}

.data > div {
  margin: .2em 0;
  font-size: .9em;
}

</style>
