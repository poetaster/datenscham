<template>
  <div id="home">
    <h1 class="main-title" v-html="copy.intro.title"></h1>
    <p class="main-claim">{{copy.intro.claim}}</p>
    <div class="center-helper">
      <router-link :to="{name: 'quiz'}" class="btn-next">{{ copy.btns.start }}</router-link>
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

<style scoped>
 .main-title {
   font-size: 5.8rem;
   text-transform: uppercase;
   letter-spacing: -6px;
   transform: rotateZ(-5deg);
   line-height: 1;
   text-shadow: 0px 0px 10px white;
   margin-bottom: 7rem;
 }
 .main-claim {
   margin-bottom: 2rem;
 }
</style>
