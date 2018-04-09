<template>
  <div id="app">
    <img src="./assets/logo.png">
    <tianjia></tianjia>
  </div>
</template>

<script>
import Tianjia from './components/Tianjia.vue'
export default {
  name: 'app',
  components: {
    Tianjia
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
