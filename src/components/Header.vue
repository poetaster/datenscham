<template>
  <header  class="header">
    <h1 class="logo">
      <router-link :to="{name: 'home'}">Datenscham org</router-link>
    </h1>

    <div class="header__nav">
      <a href="https://netzpolitik.org">{{copy.footer.service}} <em>netzpolitik.org</em></a>
      <a href="#datenschutzhinweise" @click.prevent="scrollMeThere">{{copy.footer.data}}</a>
      <a href="#impressum" @click.prevent="scrollMeThere">{{copy.footer.imprint}}</a>
    </div>
  </header>
</template>
<script>
 import Copy from '@/config/copy'

 export default {
   name: 'AppHeader',
   data() {
     return {
       copy: Copy
     }
   },
   methods: {
     scrollMeThere(ev) {
       const elemID = ev.target.href.split('/#')[1]
       let newElem = document.querySelector('#' + elemID)
       const opt = {top: newElem.offsetTop,
                    left: 0,
                    behavior: 'smooth'}
       window.scrollTo(opt)
       this.$router.push({hash: '#' + elemID})
     }
   }
 }
</script>
<style scoped>
 .logo {
   font-family: 'AsapCondensed', ".SFNSText-Regular","San Francisco","Roboto","Segoe UI","Helvetica Neue","Lucida Grande", sans-serif;
   border-left: 10px solid var(--copy);
   text-transform: uppercase;
   width: 3.3em;
   word-break: break-word;
   line-height: 0.8;
   margin-top: 0;
   padding-bottom: 0.5em;
   padding-left: .2rem;
   font-size: 2rem;
 }

 .logo a {

 }

 .header {
   display: flex;
   justify-content: space-between;
   margin-top: 1rem;
 }
 .header a {
   text-decoration: none;

 }

 .header__nav a {
   display: inline-block;
   margin-left: 2rem;
   font-size: 0.9rem;
 }

 .header__nav a:hover,
 .header__nav a:active {
   text-decoration: underline

 }

</style>
