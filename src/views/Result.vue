<template>
  <div id="result" class="mainview">
    <h1 class="main-title">{{ copy.result.your_score}}</h1>
    <template v-if="$root.$data.score">
      <p class="result-score">{{ $root.$data.score }}</p>
    </template>
    <aside id="twingle"></aside>
    <div class="center-helper">
      <router-link :to="{ path: '/quiz/' }" class="btn">{{ copy.btns.again }}</router-link>
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
     setTimeout(this.twingleCode, 300)
   },
   methods: {
     twingleCode() {
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
</style>
