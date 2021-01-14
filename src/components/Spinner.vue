<template>
  <div class="spinner" :style="{fontSize:displaySize}"><div></div><div></div><div></div><div></div></div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: "Spinner",
    props: ["size"],
    computed: {
      displaySize() { return this.size || "3em" }
    }
  }
</script>

<style>
.spinner {
  width: 1em;
  height: 1em;
  display: inline-block;
  position: relative;
  animation: spinner 3s linear infinite;
}

.spinner div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: .8em;
  height: .8em;
  margin: .1em;
  border: .1em solid var(--theme);
  border-radius: 50%;
  animation: spinner 1.3s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--theme) transparent transparent transparent;
}
.spinner div:nth-child(1) {
  animation-delay: -0.45s;
}
.spinner div:nth-child(2) {
  animation-delay: -0.3s;
}
.spinner div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
