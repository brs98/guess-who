<template>
  <div class="home">
    <Board />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Board from '../components/Board.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Board
  },
  mounted() {
    this.$store.dispatch('setPlayerInfo');
  }
});
</script>
