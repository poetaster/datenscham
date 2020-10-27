<template>
  <div id="app" class="app">
    <app-header />
    <router-view></router-view>
    <app-footer />
  </div>
</template>

<script>
 import AppFooter from '@/components/Footer'
 import AppHeader from '@/components/Header'


 export default {
   name: 'App',
   components: {
     AppFooter,
     AppHeader
   },
   data() {
     return {
       //copy: Copy
     }
   },
   methods: {

   }
 }
</script>

<style>
 :root {
   --primary-color: #0a9eff;
   --copy: #fff;
 }

 @font-face {
   font-family: 'Asap';
   src: url('/fonts/asap-medium-webfont.woff2') format('woff2'),
   url('/fonts/asap-medium-webfont.woff') format('woff');
   font-weight: normal;
   font-style: normal;
 }

 *, *:before, *:after {
   box-sizing: border-box;
 }

 body {
   background-color: var(--primary-color);
   color: var(--copy);
   font-family: "Asap",".SFNSText-Regular","San Francisco","Roboto","Segoe UI","Helvetica Neue","Lucida Grande", sans-serif;
   font-size: 20px;
   margin: 0;
   overflow-x: hidden;
 }

 a {
   color: var(--copy);
 }

 .app {
   max-width: 860px;
   margin: 2rem auto;
   padding: 0 1.4rem;
 }

 .btn-next {
   position: relative;
   display: inline-block;
   background-color: var(--copy);
   color: var(--primary-color);
   padding: .5em 3em;
   text-decoration: none;
   font-size: 1.2em;
   transition: transform 200ms ease-in-out;
 }
 .btn-next:after {
   content: "";
   position: absolute;
   top: 0;
   right: -1.2em;
   width: 0;
   height: 0;
   border-top: 28px solid transparent;
   border-bottom: 28px solid transparent;
   border-left: 29px solid var(--copy);
 }
 .btn-next:hover,
 .btn-next:active {
   transform: scale(0.97)
 }
 .center-helper {
   text-align: center
 }

</style>
