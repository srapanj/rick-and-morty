<template>
  <div class="container my-4">
     <!-- <div class="control">
        <h1>Rick and Morty characters</h1>
        <p>Filter by:</p>
        <label for="name">Name</label>
        <input type="text" @keyup="filterIfFinishedTyping($event)" v-model="nameFilter"><br>
        <label for="status">Status</label>
        <select v-model="selectedStatusFilter" @change="statusChange($event)">
          <option v-for="(option, index) in statusOptions" :key="index" :value="option.value">{{option.text}}</option>
      </select>
    </div> -->
    <div class="columns is-gradient is-bold mt-3">
        <div class="mr-3">
         <p class="is-size-4">Search for character</p>
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
        <character
          @showModal="showModal"
          v-for="character in characters"
          :key="character.id"
          v-bind:character="character"
        />
      </div>



      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <!-- <a class="pagination-previous" @click="changePage(page - 1)">
          <img class="mr-1" width="25px" height="25px" src="right-arrow.png" style="transform: scaleX(-1);">
          Previous
        </a> -->
        <ul class="pagination-list">
          <li>
            <p class="is-size-5 mr-2">Pick a page</p>
          </li>
          <li>
            <a @click.prevent="changePage(page_nr)" v-for="(page_nr, index) in pages" :key="index" class="pagination-link is-current">{{page_nr}} </a>
          </li>
        </ul>
        <!-- <a class="pagination-next" @click.prevent="changePage(page + 1)">
          Next <img class="ml-1" src="right-arrow.png" alt="">
          </a> -->
      </nav>
      <character-modal
      :currentCharacter="currentCharacter"
    />
  </div>
  
</template>

<script>
import axios from "axios"
export default {
  name: "app",
   components:{
    'character': () =>import('@/components/Character.vue'),
    'character-modal': () =>import('@/components/modal/character_modal.vue'),
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1,
      show_modal: false,
      currentCharacter: {},
      search: '',
    }
  },
  created() {
    this.getCharacters();
  },
  methods: {
    statusChange(e){
      console.log('test', e.target.value, this.characters)
      this.characters = this.characters.filter(c => c.status.toLowerCase() == e.target.value.toLowerCase())
    },
    getCharacters() {
      axios
        .get(
          `https://rickandmortyapi.com/api/character/?page=${this.page}&name=${
            this.search
          }`
        )
        .then(res => {
          this.characters = res.data.results
          this.pages = res.data.info.pages
        })
        .catch(err => {
          console.log(err);
        })
    },
    changePage(page) {
      this.page = page <= 0 || page > this.pages ? this.page : page;
      this.getCharacters();
      window.scrollTo(500, 0);
    },
    searchData() {
      this.page = 1;
      this.getCharacters();
    },
    async getCharacter(id) {
      let results = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}/`
      );
      this.currentCharacter = results.data;
      this.show_modal = true;
    },
    showModal(id) {
      this.getCharacter(id);
    }

  }
};
</script>

<style>
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
</style>
