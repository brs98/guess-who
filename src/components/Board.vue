<template>
  <div class="board">
    <Card :ancestors="ancestors"/>
  </div>
</template>

<script>
  import Card from './Card.vue';
  export default {
    name: 'Board',
    components: {
      Card
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
