<template>
  <div class="footer">
    <footer class="footer__nav">
      <a href="#datenschutzhinweise">{{copy.footer.data}}</a>
      <a href="#impressum">{{copy.footer.imprint}}</a>
      <a href="https://netzpolitik.org"><logo /></a>
    </footer>
  </div>
</template>
<script>
 import Copy from '@/config/copy'
 import NPLogo from '@/components/Logo'

  export default {
    name: 'AppFooter',
    components: {
      logo: NPLogo
    },
    data() {
      return {
        copy: Copy
      }
    }
  }
</script>
<style>
 .footer {
   margin-top: 2rem;
   padding: 0.5rem 0;
   border-top: 1px solid var(--copy);
 }
 .footer__nav {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
 }

 .footer__nav a {
   text-decoration: none
 }
 .footer__nav a:hover,
 .footer__nav a:active {
   text-decoration: underline;
 }
</style>
