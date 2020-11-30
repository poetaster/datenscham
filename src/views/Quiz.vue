<template>
  <div id="quiz" class="mainview">
    <p class="main-claim">{{copy.intro.claim}}</p>

    <score-calculator
      :questions="sample"
      :buttonText="text"
      v-on:scoreResult="showScore"
      v-on:missingQuestions="showError"
      v-on:userSelect="storeChoice"
      :missingQ="missingQ" />

    <template v-if="error">
      <div class="center-helper">
        <p>{{error}}</p>
      </div>
    </template>

    <template v-if="result">
      <p>{{result}}</p>
    </template>
  </div>
</template>

<script>
 import Copy from '../config/copy.json'
 import ScoreCalculator from '@/components/ScoreCalculator.vue'
 import questions from '@/data/questions.json'

 export default {
   name: 'Quiz',
   components: {
     ScoreCalculator
   },
   data() {
     return {
       sample: questions,
       text: "Score errechnen",
       error: undefined,
       missingQ: [],
       result: undefined,
       copy: Copy
     }
   },
   methods: {
     showScore(evt) {
       this.error = undefined
       this.$root.$data.score = evt
       return this.$router.push({path: '/score/'})
     },
     showError(evt) {
       this.missingQ = evt
       this.error = `Noch ${evt.length} Fragen unbeantwortet.`
     },
     storeChoice(evt) {
       //console.log(evt)
       if (!this.$root.$data.selectedAnswers) {
         this.$root.$data.selectedAnswers = {}
       }
       this.$root.$data.selectedAnswers[`${evt.id}`] = evt.score

     }
   }
 }

</script>
