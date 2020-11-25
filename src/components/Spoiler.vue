<template>
  <aside>
    <section id="spiler"  class="spoiler">
      <h2>Gewichtungen</h2>
      <p>Achtung Spoiler!</p>
      <template>
        <ul>
          <li v-for="q in questions">
            {{q.title}}
            <ul>
              <li v-for="a in q.answers">{{ a.text }} - {{Math.floor(a.score)}} Punkte</li>
            </ul>
          </li>
        </ul>
      </template>
    </section>
  </aside>
</template>
<script>
 import questions from '@/data/questions.json'
 export default {
   name: 'AppSpoiler',
   data() {
     return {
       questions
     }
   }
 }
</script>
<style scoped>
 .spoiler {
   margin-top: 5rem;
   scroll-margin-top: 5rem;
 }
</style>
