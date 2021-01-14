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
        this.$emit('clicked', ancestor)
      }
    }
  }
</script>

<style scoped>
</style>
