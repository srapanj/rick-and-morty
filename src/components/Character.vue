<template>
  <div class="column is-6-mobile is-3-desktop is-4-tablet">
    <div class="card" :class="[character.status == 'Dead' ? 'has-background-danger ' : 'has-background-primary']">
      <div class="card-header">
        <img v-if="character.image" class="m-2" :src="character.image" :alt="character.name">
      </div>
      <div class="card-content">
        <h3 class="title is-size-4 has-text-white">{{character.name}}</h3>
        <button class="button is-rounded is-small"  @click.prevent="showMore(character.id)">Show more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['character'],
    methods: {
        showMore(id){
            this.$emit('showModal', id)
        }
    }
}
</script>
