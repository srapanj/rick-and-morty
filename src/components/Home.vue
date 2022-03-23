<template>
   <div>
       <div class="is-flex mt-2 mb-0" style="justify-content:center!important;">
           <!-- <div>
               <p class="is-size-4 mx-3">Choose page</p>
           </div> -->
           <div>
                <input v-model="page_data" class="input" type="number" placeholder="Text input">
           </div>
           <div>
               <a class="is-size-4 mx-3" @click.prevent="getCharacters()" href="">Choose page</a>
           </div>
       </div>
      <p class="mt-2 is-size-1 has-text-primary">{{characters.length}} characters</p>
      <!-- <input type="text" v-model="search" placeholder="Search"> -->
      <div class="content">
        <div class="content-characters" v-for="(character, index) in characters" :key="index">
        <div :class="[character.status == 'Dead' ? 'has-background-danger' : 'has-background-primary']">
          <img class="mt-2" :src="character.image" alt="">
        <div class="info-character">
          <p class="is-size-4 mb-0" :class="{'has-text-white':  character.status == 'Dead'}"> {{ character.name}}</p>
          <p class="is-size-5 mb-1" :class="{'has-text-white':  character.status == 'Dead'}">Was part of {{character.episode.length}} {{character.episode.length == 1 ? 'episode' : 'episodes'}}</p>
          <div class="is-flex px-3 pb-2" style="justify-content: space-between!important;">
              <div>
                <p class="is-size-6" :class="{'has-text-white':  character.status == 'Dead'}"> {{ character.species}}</p>
              </div>
              <div>
                <p class="is-size-6" :class="{'has-text-white':  character.status == 'Dead'}"> {{ character.status}}</p>  
              </div>
          </div>
        </div>
        </div>
    </div>
   </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'app',
  components: {
  },
  data(){
    return {
        page_data: 0,
        characters: []
    }
  },
//   created(){
//     this.getCharacters()
//   },
//   watch:{
//       characters: function(){
//              axios.get('https://rickandmortyapi.com/api/character/?page=' + this.page_data)
//       .then(res => {
//           console.log('test', this.page_data)
//         (this.characters = res.data.results)
//       })
//       .catch(e => {
//         console.log(e)
//       })
//       }
//   },
  methods: {
    getCharacters(){
      axios.get('https://rickandmortyapi.com/api/character/?page=' + this.page_data)
      .then(res => {
          console.log('test', this.page_data)
        (this.characters = res.data.results)
      })
      .catch(e => {
        console.log(e)
      })
    }
  },
}
</script>


<style >
html{
  background-color: #f8fafc!important;
}
body {
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.6;
  color: #212529;
  text-align: left;
  background-color: #f8fafc;
}
 .content{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  width: 80%;
  margin: 0 auto;
}

</style>
