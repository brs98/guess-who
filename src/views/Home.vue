<template>
  <div class="home">
    <Card :ancestors="ancestors"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '../components/Card.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Card,
  },
  computed: {
      ancestors() {
        return this.$root.$data.Ancestors;
      }
    },
});
</script>
