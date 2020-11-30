<template>
  <aside>
    <section id="spoiler"  class="spoiler">
      <h2>Auswertung</h2>
      <p>Achtung Spoiler! Lies diesen Teil am besten erst nach dem Test.</p>
      <button @click="toggleSpoiler" class="btn spoiler-btn">Zeig her!</button>
      <transition
        name="slide-top"
        mode="out-in">
        <template v-if="showSpoiler">
          <div >
            <h3>So haben wir die einzelnen Antworten bewertet</h3>
            <p>Der Transparenz halber zeigen wir hier, wie wir die einzelnen Antworten gewichtet haben. Die Vergabe von Punkten für diesen nicht ganz ernst gemeinten Rechner ist nur ein Hilfskonstrukt, um Aufmerksamkeit und einen spielerischen Zugang zur Thematik zu ermöglichen. Bitte nehmt die Punkteverteilung deshalb nicht zu ernst. Privatsphäre ist ein soziales Konstrukt und IT-Sicherheit immer kontextabhängig. Ein gut konfigurierter Chrome-Browser kann datensparsamer sein als Firefox mit falschen Add-Ons. Sich in sozialen Netzwerken für eine bessere Datenschutzpolitik einsetzen, könnte langfristig mehr für den Schutz der Privatsphäre bewirken, als sich virtuell einzumauern. Wir freuen uns natürlich trotzdem, wenn ihr uns freundliche und mit Quellen unterlegte Hinweise gebt, falls ihr mit einer Bepunktung nicht einverstanden seid. Bitte schickt sie an <a href="mailto:datenscham@netzpolitik.org">datenscham@netzpolitik.org</a></p>

            <ul class="spoiler-list">
              <li v-for="q in questions">
                <h3>{{q.id}}. {{q.title}}</h3>
                <p v-html="q.footnote"></p>
                <ul>
                  <li v-for="a in q.answers" :class="{ 'userChoice': userChoice(q, a) }">
                    {{ a.text }} - {{Math.floor(a.score)}} Punkte
                    <span v-if="userChoice(q, a)">deine Antwort</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
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
     },
     userChoice(question, answer) {
       if (!this.$root.$data.selectedAnswers) return false
       return  this.$root.$data.selectedAnswers[`${question.id}`] == answer.score
     }
   }
 }
</script>
<style scoped>
 .spoiler {
   margin-top: 5rem;
   scroll-margin-top: 5rem;
   margin-bottom: 5rem;
 }

 .spoiler-list {
   margin: 0;
   padding: 0;
 }
 .spoiler-list > li {
   list-style: none;
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
 .userChoice span {
   background-color: white;
   color: var(--primary-color);
   border-radius: 2px;
   padding: 0.1em 0.2em;
 }
</style>
