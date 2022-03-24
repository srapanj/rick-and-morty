<template>
<div class="container my-4">
     <div class="columns is-gradient is-bold mt-3">
        <div class="mr-3">
          <p class="is-size-4">Search for episode</p>
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
        <Card page="episode" v-for="item in episodes" :key="item.id" :id="item.id" :character="item"></Card>
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
</div>
</template>

<script>
import axios from "axios";
export default {
    components:{
        'Card': () =>import('@/components/Card.vue'),
    },
  data(){
    return {
      episodes:[],
      page: 1,
      pages: 1,
      search: '',
    }
  },
  methods: {
    getData(){
        axios.get(
          `https://rickandmortyapi.com/api/episode/?page=${this.page}&name=${
            this.search
          }`
        )
        .then(res => {
          this.episodes= res.data.results
          this.pages = res.data.info.pages
        })
        .catch(err => {
          console.log(err);
        })
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