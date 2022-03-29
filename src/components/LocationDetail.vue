<template>
  <div class="container my-4">
    <div class="columns">
      <div class="column is-2">
        <p class="is-centered is-size-4">{{location}}</p>
      </div> 
     <div class="column is-pulled-left">
      <div class="select is-rounded">
        <select v-model="selectedStatusFilter" @change="statusChange($event)">
          <option :value="''">Filter Character</option>
          <option v-for="(option, index) in statusOptions" :key="index" :value="option.value">{{option.text}}</option>
        </select>
      </div>
     </div>
    </div>
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
        selectedStatusFilter: '',
        statusOptions: [
        { text: 'Alive', value: 'alive' },
        { text: 'Dead', value: 'dead' },
        { text: 'Unknown', value: 'unknown' }
      ],
     }
   },
   methods: {
     getData(event){
       axios.get('https://rickandmortyapi.com/api/location/'+event).then(
           res=> this.list = res.data.residents,
       )
     },
     statusChange(e){
      console.log('test', e.target.value, this.data)
      this.data = this.data.filter(c => c.status.toLowerCase() == e.target.value.toLowerCase())
    },
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