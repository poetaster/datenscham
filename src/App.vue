<template>
  <div id="app" class="app">
    <div class="wrapper">
      <app-header />
      <transition
        :name="transitionName"
        mode="out-in">
        <router-view></router-view>
      </transition>
      <app-footer />
    </div>
  </div>
</template>

<script>
 import smoothscroll from 'smoothscroll-polyfill';
 import AppFooter from '@/components/Footer'
 import AppHeader from '@/components/Header'
 import AppLegal from '@/components/Legal'

 export default {
   name: 'App',
   components: {
     AppFooter,
     AppHeader,
     AppLegal
   },
   watch: {
     '$route' (to, from) {
       const toDepth = to.path.split('/').length
       const fromDepth = from.path.split('/').length
       //console.log(to.path, from.path, toDepth, fromDepth)
       this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
     }
   },
   created() {
     smoothscroll.polyfill();
   },
   data() {
     return {
       transitionName: 'slide-left'
       //copy: Copy
     }
   },
   methods: {

   },
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

 @font-face {
   font-family: 'AsapCondensed';
   src: url('/fonts/asap-condensed-semibold-webfont.woff2') format('woff2'),
   url('/fonts/asap-condensed-semibold-webfont.woff') format('woff');
   font-weight: 600;
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
   height: 100vh;
   overflow-x: hidden;
 }
 .wrapper {
   max-width: 860px;
   padding: 0 1.4rem;
   margin: 2rem auto;
 }

 .btn,
 .btn-next,
 .btn-back {
   position: relative;
   display: inline-block;
   background-color: var(--copy);
   color: var(--primary-color);
   padding: .5em 0.4em;
   text-decoration: none;
   font: inherit;
   border: 0;
   font-size: 1.2em;
   height: 60px;
   transition: transform 200ms ease-in-out;
   cursor: pointer;
   max-width: 70vw;
 }
 @media (min-width: 600px) {
   .btn,
   .btn-next,
   .btn-back {
     padding: 0.6rem 3rem;
     line-height: 1.7;
   }
 }

 .btn-next:after {
   content: "";
   position: absolute;
   top: 0;
   right: -1.25em;
   width: 0;
   height: 0;
   border-top: 30px solid transparent;
   border-bottom: 30px solid transparent;
   border-left: 30px solid var(--copy);
 }
 .btn-back:after {
   content: "";
   position: absolute;
   top: 0;
   left: -1.25em;
   width: 0;
   height: 0;
   border-top: 30px solid transparent;
   border-bottom: 30px solid transparent;
   border-right: 30px solid var(--copy);
 }
 .btn:hover,
 .btn:active,
 .btn-next:hover,
 .btn-next:active,
 .btn-back:hover,
 .btn-back:active {
   transform: scale(0.97)
 }
 .center-helper {
   text-align: center
 }


 .slither-enter-active, .slither-leave-active {
   transition: transform 1s;
 }

 .slither-enter, {
   transform: translateX(-100%);
 }

 .slither-leave-to  {
   transform: translateX(100%);
 }

 .slither-enter-to, .slither-leave {
   transform: translateX(0);
 }

 .slide-left-enter-active,
 .slide-left-leave-active,
 .slide-right-enter-active,
 .slide-right-leave-active {
   transition: all .75s cubic-bezier(.55,0,.1,1);
 }

 .slide-left-enter, .slide-right-leave-active {
   opacity: 0;
   -webkit-transform: translate(100px, 0);
   transform: translate(100px, 0);
 }
 .slide-left-leave-active, .slide-right-enter {
   opacity: 0;
   -webkit-transform: translate(-100px, 0);
   transform: translate(-100px, 0);
 }

</style>
