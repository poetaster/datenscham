<template>
  <section class="question-group">
    <h3 class="question-group__headline">{{ data.title }}</h3>
    <template v-if="isMissing"><p class="error-text">Fill me out</p></template>
    <div class="question-group__answers" :class="{'error': isMissing}">
      <label
        v-for="(answer, index) in data.answers"
        :key="index"
        class="answer-group"
      >
        <input
          v-model="score"
          :checked="score === answer.score"
          :value="answer.score"
          :name="data.id"
          :id="`${data.id}_${index}`"
          type="radio"
          class="answer-group__input"
        />
        <span class="answer-group__text">{{ answer.text }}</span>
      </label>
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
    },
    missingQ(missings) {
      //debugger
      //console.log(missings)
      //this.isStillMissing()
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
 .error {
   border: red 2px solid
 }

 .error-text {
   color: red
 }
</style>
