<template>
  <div class="score-calculator">


    <div class="quiz__overflow">
      <score-calculator-question-group
        v-for="question in questions"
        :key="question.id"
        :data="question"
        :questionsCount="questions.length"
        @answerClicked="onAnswerClick"
        :missingQ="missingQ"
      />
    </div>
    <div class="score-calculator__score-container center-helper">
      <p><button data-test="button-emit" @click="emitScore" class="btn-next">
        {{ buttonText }}
      </button></p>
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

       this.$set(clickedQuestion, 'activeScore', answer.score)
     }
   }
 }
</script>

<style scoped>
 .quiz__overflow {
   height: 60vh;
   overflow-y: scroll;
   scrollbar-width: none;
   position: relative;
 }
 .blanks {
   display: flex;
   justify-content: space-between;
   margin-bottom: 0.8rem;
 }
 .blank {
   height: 2px;
   display: inline-block;
   background-color: white;
   flex: 0 0 8%;
 }

 @media (min-width: 600px) {
   .quiz__overflow {

   }
 }
</style>
