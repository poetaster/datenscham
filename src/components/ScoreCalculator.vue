<template>
  <div class="score-calculator">

    <div class="quiz__overflow">
      <score-calculator-question-group
        v-for="question in questions"
        :key="question.id"
        :data="question"
        :questionsCount="questions.length"
        @answerClicked="onAnswerClick"
        @emitScore="emitScore"
        :missingQ="missingQ"
      />
    </div>

    <footer class="score-calculator__footer">
      <slot name="footerText" />
    </footer>
  </div>
</template>

<script>
 import ScoreCalculatorQuestionGroup from './ScoreCalculatorQuestionGroup.vue'

 export default {
   components: {
     ScoreCalculatorQuestionGroup
   },
   data() {
     return {
       showsScore: false
     }
   },
   props: {
     questions: {
       type: Array,
       required: true
     },
     buttonText: {
       type: String,
       default: 'Show result'
     },
     questionsOptional: {
       type: Boolean,
       default: false
     },
     missingQ: {
       type: Array
     }
   },
   computed: {
     accumulatedScore() {
       const reducer = (accumulator, currentValue) => accumulator + currentValue

       const values = this.questions.map((q) => q.activeScore || 0)

       return values.reduce(reducer)
     },
     hasAllAnswers() {
       return this.questions.every((q) =>
         Object.prototype.hasOwnProperty.call(q, 'activeScore')
       )
     }
   },
   methods: {
     emitScore() {
       if (!this.hasAllAnswers && !this.questionsOptional) {
         const missing = this.questions.filter(
           (question) =>
             !Object.prototype.hasOwnProperty.call(question, 'activeScore')
         )
         this.$emit('missingQuestions', missing)

         return
       }

       this.$emit('scoreResult', this.accumulatedScore)
     },
     onAnswerClick(answer) {
       const { questions } = this

       const clickedQuestion = questions.find((q) => q.id === answer.id)
       this.$emit('userSelect', answer)
       this.$set(clickedQuestion, 'activeScore', answer.score)
     }
   }
 }
</script>

<style scoped>
 .quiz__overflow {

 }

 .score-calculator {
   border-top: 2px solid var(--copy);
 }
 .score-calculator__score-container {
   border-top: solid 2px currentColor
 }

 @media (min-width: 600px) {
   .quiz__overflow {
     height: 65vh;
     overflow-y: scroll;
     scrollbar-width: thin;
     scrollbar-color: #fff rgba(255,255,255,0.3);
     position: relative;
     padding-right: 0.8rem;
   }
   .quiz__overflow::-webkit-scrollbar {
     width: 0.3rem;
     height: 8px;
     background-color: rgba(255,255,255,0.3);
   }
   .quiz__overflow::-webkit-scrollbar-thumb {
     background-color: #fff
   }
 }
</style>
