<template>
  <footer>
    <hr>
    <a href="https://netzpolitik.org"><logo /></a>
  </footer>
</template>
<script>
 import NPLogo from '@/components/Logo'

  export default {
    name: 'AppFooter',
    components: {
      logo: NPLogo
    }
  }
</script>
<style>
 hr {
   border: 1px solid var(--copy);
   border-bottom: none;
 }
 footer {
   margin-top: 2rem;
   text-align: right;
 }
</style>
