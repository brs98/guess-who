<template>
  <div class="wrapper">
    <div class="ancestors">
      <div class="ancestor" v-for="ancestor in ancestors" :key="ancestor.id">
        <div class="info">
          <img :src="'/images/'+ancestor.image">
          <h1>{{ancestor.name}}</h1>
          <div class="data">
            <h2>Date of Birth: {{ancestor.dateOfBirth}}</h2>
            <h2>Date of Death: {{ancestor.dateOfDeath}}</h2>
            <h2>Place of Birth: {{ancestor.placeOfBirth}}</h2>
            <h2>Place of Death: {{ancestor.placeOfDeath}}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      ancestors: Array
    }
  }
</script>

<style>

.wrapper {
  display: inline-block;
  border-style: solid;
}

h1 {
  margin: 0px;
  font-size: 100%;
}

.data {
  font-size: 50%;
  background-color: #C2DEFC;
}

.ancestor {
  width: 20%;
  margin: auto;
  display: inline-block;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.info {
    border-style: solid;
    border-width: 5px;
    border-radius: 12px;
    border-color: #C2DEFC;
    margin: 10px;
    transition: border-color .5s;
  }

.info:hover {
  border-color: #78b7fa;
  cursor: pointer;
}

img {
  margin-top: 10px;
  border-radius: 12px;
  width: 80%;
}

</style>
