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
  created() {
    if (!this.$store.state.person.tree[0].image) {
      this.$store.dispatch('setPlayerInfo');
    }
    if (window.location.search === '') {
      this.$store.dispatch('logout');
    }
  }
});
</script>
