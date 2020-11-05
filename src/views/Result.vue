<template>
  <div id="result" class="mainview">
    <div class="result-wrapper">
      <div class="result-result">
        <h1 class="main-title">{{ copy.result.your_score}}</h1>

        <template v-if="$root.$data.score">
          <p class="result-score">{{ score }}</p>
          <p>{{ scoreEvalutation  }}</p>
        </template
        <div class="center-helper">
          <router-link :to="{ path: '/quiz/' }" class="btn">{{ copy.btns.again }}</router-link>
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
       copy: Copy
     }
   },
   created() {
     if (this.$root.$data.score == undefined) {
       this.$router.replace({name: 'home'})
     }
   },
   mounted() {
     setTimeout(() => {

       //this.twingleCode()
       // ?

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
     twingleCode() {
       console.log("called")
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
     }
   },
   computed: {
     scoreEvalutation() {
       const score = this.$root.$data.score
       let out = '';
       if (this.between(score, 0, 30)) {
         out = 'Niedrig'
       } else if (this.between(score, 31, 70)) {
         out = 'Mittel'
       } else if (this.between(score, 71, 100)) {
         out = 'Hoch'
       } else {
         out = 'Out of range?! Das sollte nicht sein'
       }

       return out
     },
     score() {
       return Math.floor(this.$root.$data.score / 10)
     }
   },
   methods: {
     between(x, min, max) {
       return x >= min && x <= max;
     }
   }
 }
</script>

<style scoped>

 .result-score {
   font-size: 10rem;
   text-align: center;
   line-height: 0;
 }
 #twingle {
   background-color: white;
 }
 .center-helper {
   margin-top: 5rem;
 }
 .result-wrapper {
   display: flex;
   flex-wrap: nowrap;
   justify-content: space-between
 }
 .result-result {
   flex: 1 0 60%
 }
 .result-donation {
   flex: 1 0 30%;
   background-color: white;

 }
</style>
