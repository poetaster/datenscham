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
    <div class="wrapper">
      <app-legal />
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

 a {
   color: var(--copy);
 }

 .wrapper {
   max-width: 860px;
   padding: 0 1.4rem;
   margin-right: auto;
   margin-left: auto;
   display: flex;
   flex-direction: column;
   min-height: 100vh;
 }
 .mainview {
   flex-grow: 1;
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
   line-height: 2;
   outline: none;
 }
 @media (min-width: 600px) {
   .btn,
   .btn-next,
   .btn-back {
     padding: 0.6rem 3rem;

   }
 }

 .btn-next:after {
   content: "";
   position: absolute;
   top: 0;
   right: -1.55em;
   width: 0;
   height: 0;
   border-top: 1.6em solid transparent;
   border-bottom: 1.6em solid transparent;
   border-left: 1.6em solid var(--copy);
 }
 .btn-back:after {
   content: "";
   position: absolute;
   top: 0;
   left: -1.55em;
   width: 0;
   height: 0;
   border-top: 1.6em solid transparent;
   border-bottom: 1.6em solid transparent;
   border-right: 1.6em solid var(--copy);
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
