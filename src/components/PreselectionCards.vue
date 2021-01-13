<template>
  <CardsList @cardClick="selectAncestor" />
</template>

<script>
  import { mapState } from 'vuex';
  import CardsList from "@/components/CardsList.vue"

  export default {
    name: "PreselectionCards",
    components: {
      CardsList
    },
    methods: {
      selectAncestor(ancestor) {
        ancestor.mysteryAncestor = true;
        this.$emit('clicked', true)
      }
    }
  }
</script>

<style scoped>
</style>
