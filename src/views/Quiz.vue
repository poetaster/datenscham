<template>
  <div id="quiz">
    <p>Errechne jetzt anhand acht kurzer Fragen deinen ganz persönlichen Datenschutzscore.</p>
    <score-calculator
      :questions="sample"
      :buttonText="text"
      v-on:scoreResult="showScore"
      v-on:missingQuestions="showError"
      :missingQ="missingQ" />

    <template v-if="error">
      <div class="center-helper">
        {{error}}
      </div>
    </template>

    <template v-if="result">
      {{result}}
    </template>
  </div>
</template>

<script>
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
       result: undefined
     }
   },
   methods: {
     showScore(evt) {
       this.error = undefined
       this.$root.$data.score = evt
       return this.$router.push({path: '/score/'})
       //this.result = `Dein Score ist ${evt}.`
     },
     showError(evt) {
       //debugger
       console.log(evt)
       this.missingQ = evt
       this.error = `Noch ${evt.length} Fragen unbeantwortet.`
     }
   }
}

</script>

<style>
</style>
