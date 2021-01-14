<template>
  <div class="card" :class="{'ui-raised ui-pressable':canFlip}" :style="{width,height}" @click="cardClick">
    <div class="flip-wrapper ui-raised" :class="{flipped: isFlipped}">
      <transition name="cardFlip" :duration="100" mode="out-in">
        <div class="info back" v-if="isFlipped" key="cardBack">
        </div>
        <div class="info" v-else>
          <div class="portrait" :style="`background-image:url(${ancestor.image})`"></div>
          <div class="data">
            <div class="card-title">{{ancestor.name}}</div>
            <div class="data-row">{{ancestor.lifespan}}</div>
            <div class="data-row">Gender: {{ancestor.gender}}</div>
            <div class="data-row compressed">Birthplace: {{ancestor.placeOfBirth}}</div>
            <div class="data-row compressed" v-if="ancestor.placeOfDeath">Death place: {{ancestor.placeOfDeath}}</div>
          </div>
        </div>
      </transition>  
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "CardsList",
    props: ["ancestor", "width","height", "flippable"],
    methods: {
      cardClick() {
        this.$emit('cardClick', this.ancestor)
      }
    },
    computed: {
      isFlipped() {
        return this.canFlip && this.ancestor.flipped;
      },
      canFlip() {
        return this.flippable || false;
      }
    }
  }
</script>

<style>

.wrapper {
  display: inline-block;
  perspective: 1000px;
}

.card {
  margin: .4em;
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  user-select:none;
  box-shadow: none !important;
}


.flip-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow:hidden;
  border-radius: 12px;
  transition: transform 1s;
  transform-style: preserve-3d;
  transition: border-color .5s;
  transition: 500ms;
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
  border-color: #FFF;
  transition: transform 1s;
  transform-style: preserve-3d;
  transition: border-color .5s;
  background: #fff;
  transition: background-color 0ms 500ms; 
}
.info.back {
  background-color: var(--theme);
  transform: rotateY(180deg);
  background-image: url("../assets/q-mark.png");
  background-size: 80%;
  background-position: 60% 50%;
  background-repeat: no-repeat;
  position: relative;
}

.info.back::after {
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(45deg, transparent 32%, rgba(255, 255, 255, 0.2) 40%, transparent 50%, transparent 52%, rgba(255, 255, 255, 0.25) 57%, transparent 69%);
  background-position: 10% 50%;
  background-size: 300% 300%;
  transition: background-position 300ms;
}

div.portrait {
  width: 100%;
  flex-grow:1;
  object-fit: cover;
  background-size: cover;
  background-position: center;
}

.card-title {
  margin: .5em 0;
  font-size: 1.1em;
  color: green;
  font-weight: bold;
}

.data > div {
  margin: .25em 0;
  font-size: .9em;
}

.data-row.compressed { 
  font-size: .85em;
  opacity: .7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

</style>
