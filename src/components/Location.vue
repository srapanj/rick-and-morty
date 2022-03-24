<template>
<div class="container my-4">
     <div class="columns is-gradient is-bold mt-3">
        <div class="mr-3">
          <p class="is-size-4">Search for location</p>
        </div>
        <div class="field has-addons is-pulled-right">
          <div class="control">
            <input
              type="text"
              v-model="search"
              placeholder="Search by name"
              class="input is-rounded"
              @keyup="searchData($event)"
            >
          </div>
          <div class="control">
            <button @click="searchData" class="button is-success is-rounded">Search</button>
          </div>
        </div>
    </div>
    <div class="columns is-desktop is-mobile is-table is-multiline">
        <Card page="location" v-for="item in locations" :key="item.id" :id="item.id" :character="item"></Card>

        <!-- <character
            @showModal="showModal"
            v-for="character in locations"
            :key="character.id"
            v-bind:character="character"
        /> -->
    </div>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous" @click="changePage(page - 1)">
          <img class="mr-1" width="25px" height="25px" src="right-arrow.png" style="transform: scaleX(-1);">
          Previous
        </a>
        <ul class="pagination-list">
          <li>
            <p class="is-size-5 mr-2">Current page</p>
          </li>
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-next" @click="changePage(page + 1)">
          Next <img class="ml-1" src="right-arrow.png" alt="">
          </a>
      </nav>
      <location-modal
      :currentLocation="currentLocation"
    />
</div>
</template>

<script>
import axios from "axios";
export default {
    components:{
        'character': () =>import('@/components/Character.vue'),
        'location-modal': () =>import('@/components/modal/location_modal.vue'),
        'Card': () =>import('@/components/Card.vue'),
    },
  data(){
    return {
      locations:[],
      currentLocation: {},
      page: 1,
      pages: 1,
      search: '',
      // show_modal: false,
    }
  },
  methods: {
    getData(){
        axios.get(
          `https://rickandmortyapi.com/api/location/?page=${this.page}&name=${
            this.search
          }`
        )
        .then(res => {
          this.locations= res.data.results
          this.pages = res.data.info.pages
        })
        .catch(err => {
          console.log(err);
        })
    //   axios.get('https://rickandmortyapi.com/api/location?page='+event).then(
    //       response => this.list = response.data.results
    //   );
    },
    async getLocation(id) {
      let results = await axios.get(
        `https://rickandmortyapi.com/api/location/${id}/`
      );
      this.currentLocation= results.data;
      // this.show_modal = true;
    },
    searchData() {
      this.page = 1;
      this.getData();
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.getData();
      window.scrollTo(500, 0);
    },
    // showModal(id) {
    //   this.getLocation(id);
    // }
  },
  created() {
    this.getData();
  }
}
</script>