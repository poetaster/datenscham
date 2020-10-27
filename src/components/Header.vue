<template>
  <header>
    <h1 class="logo">
      <router-link :to="{name: 'home'}">Datenscham org</router-link>
    </h1>
  </header>
</template>
<script>
  export default {
    name: 'AppHeader',

  }
</script>
<style scoped>
  .logo {
    border-left: 10px solid var(--copy);
    text-transform: uppercase;
    width: 3.6em;
    word-break: break-word;
    line-height: 0.8;
    padding-bottom: 0.5em;
    padding-left: .2rem;
    letter-spacing: -2px;
    font-size: 2rem;
  }


 .logo a {
   text-decoration: none;
 }
</style>
