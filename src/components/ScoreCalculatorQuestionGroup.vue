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
    <div class="question-group__nav">
      <div class="nav__back">
        <template v-if="(data.id -1) > 0">
          <a href="#" class="btn-back">{{ copy.btns.back}}  {{data.id -1}}</a>
        </template>
      </div>
      <div class="nav__next">
        <template v-if="(data.id +1) <= questionsCount">
          <a href="#" class="btn-next">{{ copy.btns.next}} {{data.id +1}}</a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
 import Copy from '../config/copy.json'

 export default {
   name: 'score-calculator-question-group',
   data() {
     return {
       score: null,
       isMissing: false,
       copy: Copy
     }
   },
   props: {
     data: {
       type: Object,
       required: true,
     },
     missingQ: {
       type: Array
     },
     questionsCount: {
       type: Number
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
   },
   computed: {

   }
 }
</script>

<style>
 .question-group {
   height: 50vh;
 }
 .question-group__headline {
   padding: .9rem 0.9rem .8rem;
   background-color: var(--copy);
   color: var(--primary-color);
   border-radius: 2px;
   text-align: center;
 }

 .question-group__answers {
   columns: 2;
   column-gap: 0.8rem;
 }

 .question-group__answers > div {
   margin-bottom: 0.8rem;
 }

 .answer-group {
   position: relative;
   z-index: 1;
   display: block;
   padding: .9rem 0 .9rem;
   cursor: pointer;
   background-color: lightgrey;
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

 .question-group__nav {
   margin-top: 0.8rem;
   columns: 2;
   column-gap: 0.8rem;
 }
 .nav__back {
   min-height: 1rem;
   text-align: right
 }
 .nav__next {
   text-align: left;
 }
</style>
