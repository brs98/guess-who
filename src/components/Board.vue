<template>
  <div class="board">
    <Cards :ancestors="ancestors"/>
  </div>
</template>

<script>
  import Cards from './Cards.vue';
  export default {
    name: 'Board',
    components: {
      Cards
    },
    computed: {
        ancestors() {
          return this.$root.$data.Ancestors;
        }
    },
  }
</script>

<style scoped>
  .board {
    border-style: solid;
    border-radius: 4px;
  }
</style>
