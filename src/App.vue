<template>
  <div id="app">
    <router-link to="/index">Go to Foo</router-link>
    <router-link to="/item">Go to Fitemoo</router-link>
    <img src="./assets/logo.png" alt="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('hashchange', this.matchAndUpdate)
  },
  methods: {
    matchAndUpdate () {
    }
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
