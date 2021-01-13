<template>
  <div class="home">
    <Board v-if="state.gameData != null" />
    <Start v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Board from '../components/Board.vue';
import Start from '../components/Start.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Board,
    Start
  },
  created() {
    if (this.$store.state.person.tree[0].image !== '/images/smiley.png') {
      this.$store.dispatch('setPlayerInfo');
    }
  }
});
</script>
