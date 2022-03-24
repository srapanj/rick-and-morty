<template>
  <div class="column is-6-mobile is-3-desktop is-4-tablet">
    <div @click.prevent="gotoCharacter(id)" v-if="page == 'character'">
       <div class="card" :class="[character.status == 'Dead' ? 'has-background-danger ' : 'has-background-primary']">
            <div class="card-header">
                <img v-if="character.image" class="m-2" :src="character.image" :alt="character.name">
            </div>
            <div class="card-content">
                <h3 class="title is-size-4 has-text-white">{{character.name}}</h3>
                <ul>
                  <li><strong>Gender:</strong> {{character.gender}}.</li>
                  <li><strong>Species:</strong> {{character.species}}.</li>
                  <li><strong>Location:</strong> {{character.location.name}}.</li>
                  <li><strong>Origin:</strong> {{character.origin.name}}.</li>
                  <li><strong>Status:</strong> {{character.status}}.</li>
              </ul>
                <!-- <button class="button is-rounded is-small"  @click.prevent="showMore(character.id)">Show more</button> -->
            </div>
        </div>
    </div>

    <div  v-if="page=='location'">
      <div @click="gotoLocation(id, character.name)" >
        <div class="card has-background-dark">
            <div class="card-header">
                <img v-if="character.image" class="m-2" :src="character.image" :alt="character.name">
            </div>
            <div class="card-content">
                <p class="title is-size-4 has-text-white">{{character.name}}</p>
                <ul class="has-text-white">
                    <li><p style="color:#7ba4c3;">Name:</p > {{character.name}}.</li>
                    <li><p style="color:#7ba4c3;">Type:</p > {{character.type}}.</li>
                    <li><p style="color:#7ba4c3;">Dimension:</p > {{character.dimension}}.</li>
                    <li><p style="color:#7ba4c3;">Residents:</p > {{character.residents.length}}.</li>
                    <li>
                      <button class="button is-info is-light">Check the residents</button>
                    </li>
                    <!-- <li><strong>Status:</strong> {{character}}.</li> -->
                </ul>
                <!-- <button class="button is-rounded is-small"  @click.prevent="showMore(character.id)">Show more</button> -->
            </div>
        </div>
      </div>
    </div>

    <div  v-if="page=='episode'">
      <div class="card has-background-dark"> 
        <div class="card-header">
          <!-- <p class="title is-size-5 is-centered has-text-white">{{character.name}}</p> -->
        </div> 
          <div class="card-content">
           <p class="title is-size-4 is-centered has-text-white">{{character.name}}</p>
           <ul class="has-text-white">
             <li><b>Episode: </b>{{character.episode}}</li>
             <li><b>Air date: </b>{{character.air_date}}</li>
           </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    methods : {
      gotoLocation(event, name){
        this.$router.push({ name: 'Location Detail', params:{id:event, name:name} })
      },
      gotoCharacter(event){
        this.$router.push({ name: 'Home', params:{id:event} })
      },
      showMore(id){
        this.$emit('showModal', id)
        }
    },
    props : ['character', 'page', 'id' ]
  }
</script>