<template>
  <div class="wrapper">
    <div class="ancestors">
      
      <CardsList @cardClick="flipCard" />
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import CardsList from "@/components/CardsList.vue"

  export default {
    name: "Card",
    components: {
      CardsList
    },
    computed: mapState({
      mysteryAncestor: state => state.person.mysteryAncestor
    }),
    data() {
      return {
        ancestors: this.$store.state.game.tree,
        backOfCard: {
          transform: 'rotateY(180deg)',
          transition: '.75s',
        },
        frontOfCard: {
          transition: '.75s',
        },
        backInfo: {
          transitionDelay: '.20s',
          visibility: 'hidden'
        },
        frontInfo: {
          transitionDelay: '.25s'
        },
        backName: {
          transform: 'rotateY(-180deg)',
          transitionDelay: '.25s',
        },
        frontName: {
          transitionDelay: '.25s',
        }
      }
    },
    methods: {
      flipCard(ancestor) {
        ancestor.flipped = !ancestor.flipped
      }
    }
  }
</script>

<style scoped>

.wrapper {
  display: inline-block;
  perspective: 1000px;
}

.mysteryAncestor {
  border: 3px solid;
}
</style>
