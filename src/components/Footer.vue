<template>
  <div class="footer">
    <p class="footer__notice">{{ copy.footer.data_claim }}</p>
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
   margin-top: 1rem;
 }
 .footer__notice {
   font-size: 0.85rem;
   text-align: center;
   padding: 0.4em .3em 0.5em;
   border-radius: 2px;
   background-color: var(--copy);
   color: var(--primary-color)
 }
 .footer__nav {
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   padding: 0.5rem 0;
   border-top: 2px solid var(--copy);
 }

 .footer__nav a {
   text-decoration: none
 }
 .footer__nav a:hover,
 .footer__nav a:active {
   text-decoration: underline;
 }
</style>
