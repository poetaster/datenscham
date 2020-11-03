<template>
  <div id="home" class="mainview">
    <h1 class="main-title" v-html="copy.intro.title"></h1>
    <p class="main-claim">{{copy.intro.claim}}</p>
    <div class="center-helper">
      <router-link :to="{path: '/quiz/'}" class="btn-next">{{ copy.btns.start }}</router-link>
    </div>
  </div>
</template>

<script>
 import Copy from '../config/copy.json'

 export default {
   name: 'Home',
   components: {

   },
   data() {
     return {
       copy: Copy
     }
   },
   methods: {
   }
 }
</script>

<style>
 .main-title {
   font-family: 'AsapCondensed', ".SFNSText-Regular","San Francisco","Roboto","Segoe UI","Helvetica Neue","Lucida Grande", sans-serif;
   font-size: 6.5rem;
   text-transform: uppercase;
   transform: rotateZ(-5deg);
   line-height: 1;
   text-shadow: 0px 0px 10px white;
   margin-bottom: 9rem;
 }
 .main-claim {
   margin-bottom: 2rem;
 }
</style>
