<template>
  <div id="result" class="mainview">
    <div class="result-wrapper">
      <div class="result-result">
        <h1 class="">{{ copy.result.your_score}}:</h1>
        <p class="result-score">{{ score }} von 10 Punkten</p>
        <p class="result-eval">
          {{ copy.result.conclusion }}:<br></br>
          {{ scoreEvalutation  }}</p>
        <p class="result-plug" v-html="scorePlug"></p>
      </div>
      <aside class="result-donation" id="twingle"></aside>
    </div>
  </div>
</template>

<script>
 import Copy from '../config/copy.json'

 export default {
   name: 'Home',
   components: {
   },
   data() {
     return {
       copy: Copy,
       range: null
     }
   },
   created() {
     if (this.$root.$data.score == undefined) {
       this.$router.replace({name: 'home'})
     }
   },
   mounted() {
     this.whatsMyRange();

     setTimeout(() => {
       let t = document.getElementById('twingle')
       if (t) {

         var u="https://spenden.twingle.de/embed/netzpolitik-org-e-v/spendenseite/tw5bbf1b2551acb/widget";
	 var id = '_' + Math.random().toString(36).substr(2, 9);
	 var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
	 //document.write('<div id="twingle-public-embed-' + id + '"></div>');
	 g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'/'+id; s.parentNode.insertBefore(g,s);

         let elem = document.createElement('div')
         elem.id = `twingle-public-embed-${id}`
         t.appendChild(elem);
       }

     }, 500)
   },
   methods: {
     whatsMyRange() {
       const score = this.$root.$data.score
       if (this.between(score, 0, 30)) {
         this.range = 'low'
       } else if (this.between(score, 31, 70)) {
         this.range = 'middle'
       } else if (this.between(score, 71, 100)) {
         this.range = 'high'
       } else {
         this.range = null
       }
     },
     between(x, min, max) {
       return x >= min && x <= max;
     }
   },
   computed: {
     scoreEvalutation() {
       if (!this.range) return ''
       return this.copy.result.eval[this.range]
     },
     scorePlug() {
       if (!this.range) return ''
       return this.copy.result.plug[this.range]
     },
     score() {
       return Math.floor(this.$root.$data.score / 10)
     }
   }
 }
</script>

<style scoped>

 .result-score {
   font-size: 3.9rem;
   font-weight: 600;
   margin-top: 0;
   margin-bottom: 0;
 }
 #twingle {
   background-color: white;
 }
 .center-helper {
   margin-top: 5rem;
 }
 .result-wrapper {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding: 2rem 0;
   border-top: 2px solid white;
   border-bottom: 2px solid white;
 }
 .result-result {
   flex: 1 0 66%;
   padding-right: 2rem;
 }
 .result-donation {
   flex: 1 0 33%;
   background-color: white;
 }
 .result-plug {
   font-size: 0.9rem;
 }
 .result-eval {
   font-size: 1.2rem;
   font-style: italic;
 }
</style>
