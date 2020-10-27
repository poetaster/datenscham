<template>
  <section class="question-group" :id="`question-${data.id}`">
    <h3 class="question-group__headline">{{ data.title }}</h3>
    <template v-if="isMissing"><p class="error-text">Fill me out</p></template>
    <div class="question-group__answers" :class="{'error': isMissing}">
      <div v-for="(answer, index) in data.answers">
        <input
          v-model="score"
          :checked="score === answer.score"
          :value="answer.score"
          :name="`question_${data.id}_${index}`"
          :id="`question_${data.id}_${index}`"
          type="radio"
          class="answer-group__input"
        />
        <label
          :key="index"
          class="answer-group"
          :for="`question_${data.id}_${index}`">
          <span class="answer-group__text">{{ answer.text }}</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'score-calculator-question-group',
  data() {
    return {
      score: null,
      isMissing: false
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    missingQ: {
      type: Array
    }
  },
  watch: {
    score(score) {
      this.$emit('answerClicked', { score, id: this.data.id })
    }
  },
   methods: {
     isStillMissing() {
       const id = this.data.id
       let arr = this.missingQ.filter(x => x.id == id)
       if ( arr.length > 0) {
         this.isMissing = true
       } else {
         this.isMissing = false
       }
     }
   }
}
</script>

<style>
 .question-group {
   height: 50vh;
 }
 .question-group__headline {
   padding: .9rem 0 .8rem;
    background-color: var(--copy);
    color: var(--primary-color);
    border-radius: 2px;
    text-align: center;
 }

 .question-group__answers {
   columns: 2;
   column-gap: 0.8rem;
 }

 .answer-group {
   position: relative;
   z-index: 1;
   display: block;
   margin-bottom: .8rem;
   padding: .9rem 0 .9rem;
   cursor: pointer;
   background-color: #e5e5e5;
   text-align: center;
   font-size: 1.2em;
   color: var(--primary-color);
   transition: transform 200ms ease-in-out;
 }
 .answer-group:hover,
 .answer-group:active {
   transform: scale(0.95)
 }

 .answer-group__input {
   visibility: hidden;
   clip: rect(0 0 0 0);
   clip-path: inset(50%);
   height: 1px;
   overflow: hidden;
   position: absolute;
   white-space: nowrap;
   width: 1px;
   z-index: -1;
 }

 .answer-group__input:checked ~ .answer-group {
   background-color: var(--copy);
 }
</style>
