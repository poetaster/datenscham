<template>
<div id="app">
  <header>
    <router-link :to="{name: 'home'}">Datenscham.org</router-link>
    <hr>
  </header>
  <router-view></router-view>
  <footer>
    <hr>
    <a href="https://netzpolitik.org">Netzpolitik.org</a>
  </footer>
</div>
</template>

<script>
 export default {
   name: 'App',
   components: {

   },
   data() {
     return {

     }
   },
   methods: {

   }
 }
</script>

<style>
</style>
