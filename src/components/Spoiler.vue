<template>
  <aside>
    <section id="spiler"  class="spoiler">
      <h2>Gewichtungen</h2>
      <p>Achtung Spoiler!</p>
      <button @click="toggleSpoiler" class="spoiler-btn">Zeig her!</button>
      <transition
        name="slide-top"
        mode="out-in">
        <template v-if="showSpoiler">
          <ul>
            <li v-for="q in questions">
              {{q.title}}
              <ul>
                <li v-for="a in q.answers">{{ a.text }} - {{Math.floor(a.score)}} Punkte</li>
              </ul>
            </li>
          </ul>
        </template>
      </transition>
    </section>
  </aside>
</template>
<script>
 import questions from '@/data/questions.json'
 export default {
   name: 'AppSpoiler',
   data() {
     return {
       questions,
       showSpoiler: false
     }
   },
   methods: {
     toggleSpoiler() {
       this.showSpoiler = !this.showSpoiler
     }
   }
 }
</script>
<style scoped>
 .spoiler {
   margin-top: 5rem;
   scroll-margin-top: 5rem;
 }
 .spoiler-btn {
   background-color: var(--copy);
   color: var(--primary-color);
   padding: 0.7em 2rem;
   border: none;
   font: inherit;
   cursor: pointer;
   transition: transform 200ms ease-in-out;
 }
 .spoiler-btn:active,
 .spoiler-btn:hover {
   transform: scale(0.95)
 }

 .slide-top-enter-active,
 .slide-top-leave-active {
   transition: all .75s cubic-bezier(.55,0,.1,1);
 }

 .slide-top-enter {
   opacity: 0;
   -webkit-transform: translate(0, 100px);
   transform: translate(0, 100px);
 }
 .slide-top-leave-active {
   opacity: 0;
   -webkit-transform: translate(0, 100px);
   transform: translate(0, 100px);
 }
</style>
