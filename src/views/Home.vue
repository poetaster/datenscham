<template>
  <div id="home">
    <h1>Wie sicher ist dein digitales ich?</h1>
    <p>Errechne jetzt anhand acht kurzer Fragen deinen ganz persönlichen Datenschutzscore.</p>
    <router-link :to="{name: 'quiz'}">Check starten</router-link>
  </div>
</template>

<script>
 export default {
   name: 'Home',
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
