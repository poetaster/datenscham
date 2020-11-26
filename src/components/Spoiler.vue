<template>
  <aside>
    <section id="spiler"  class="spoiler">
      <h2>Auswertung</h2>
      <p>Achtung Spoiler! Lies diesen Teil am besten erst nach dem Test.</p>
      <button @click="toggleSpoiler" class="btn spoiler-btn">Zeig her!</button>
      <transition
        name="slide-top"
        mode="out-in">
        <template v-if="showSpoiler">
          <div >
            <h3>So haben wir die einzelnen Antworten bewertet</h3>
            <p>Der Transparenz halber zeigen wir hier, wie wir die einzelnen Antworten gewichtet haben. Die Vergabe von Punkten für diesen nicht ganz ernst gemeinten Datenscham-Rechner ist nur ein Hilfskonstrukt, um Aufmerksamkeit und einen spielerischen Zugang zur Thematik zu ermöglichen. Bitte nehmt die Punkteverteilung deshalb nicht zu ernst. Privatsphäre ist ein soziales Konstrukt und IT-Sicherheit immer kontextabhängig. Wer seinen Chrome-Browser richtig konfiguriert, kann damit datensparsamer unterwegs sei als jemand, der im Firefox die falschen Add-Ons installiert hat. Wer sich in sozialen Netzwerken für eine bessere Datenschutzpolitik einsetzt, kann vielleicht langfristig für den Schutz der Privatsphäre mehr bewirken, als jemand, der sich virtuell einmauert. Wir freuen uns natürlich trotzdem, wenn ihr uns freundliche und mit Quellen unterlegte Hinweise gebt, falls ihr mit einer Bepunktung nicht einverstanden seid. Bitte schickt sie an <a href="mailto:papierkorb@netzpolitik.org">papierkorb@netzpolitik.org</a></p>

            <ul class="spoiler-list">
              <li v-for="q in questions">
                <h3>{{q.id}}. {{q.title}}</h3>
                <p v-html="q.footnote"></p>
                <ul>
                  <li v-for="a in q.answers">{{ a.text }} - {{Math.floor(a.score)}} Punkte</li>
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
</style>
