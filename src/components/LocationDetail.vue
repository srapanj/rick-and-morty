<template>
  <div class="container my-4">
    <p class="is-centered is-size-4">{{location}}</p>
    <!-- <character
            @showModal="showModal"
            v-for="character in list"
            :key="character.id"
            v-bind:character="character"
        /> -->
        <div class="columns is-desktop is-mobile is-table is-multiline">
            <Card v-for="item in data"
            :id="item.id" :key="item.index" page="character" :character="item" />
        </div>
  </div>
</template>

<script>
 import axios from "axios"
 export default {
     components:{
        'character': () =>import('@/components/Character.vue'),
        'Card': () =>import('@/components/Card.vue'),
     },
   data(){
     return {
       id:null,
       list: null,
       data: null,
       location: null,
     }
   },
   methods: {
     getData(event){
       axios.get('https://rickandmortyapi.com/api/location/'+event).then(
           res=> this.list = res.data.residents,
       );
     }
   },
   watch: {
     id: function (){
       this.getData(this.id);
     },
     list : function (){
       this.data = [];
       this.list.forEach(element =>
           axios.get(element).then(
               res=> this.data.push(res.data),
           )
       );
     }
   },
   created() {
     this.id = this.$route.params.id;
     this.location = this.$route.params.name;
   },
 }
</script>