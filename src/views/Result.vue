<template>
  <div id="result">
    <h1>Dein Score</h1>
    <template v-if="$root.$data.score">
      <p>{{ $root.$data.score }}</p>
    </template>
    <aside>
      Spenden widget
    </aside>
    <router-link :to="{name: 'quiz'}">Nochmal</router-link>
    |
    <router-link :to="{name: 'home'}">Zur Startseite</router-link>
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
   created() {
     if (this.$root.$data.score == undefined) {
       this.$router.replace({name: 'home'})
     }
   },
   methods: {
   }
 }
</script>

<style>

</style>
