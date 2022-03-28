<template>
    <div class="modal" :class="{'is-active': $parent.show_modal}" v-if="$parent.show_modal">
        <div class="modal-background" @click="$parent.show_modal = false"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">About {{currentCharacter.name}}</p>
                    <button class="delete" @click.prevent="$parent.show_modal = false" aria-label="close"></button>
            </header>
            <div class="modal-card-body">
                <div class="columns">
                    <div class="column is-centered">
                        <i class="fas fa-check-square" :class="[currentCharacter.status == 'Alive' ? 'has-text-primary' : 'has-text-danger']"></i>
                        <p>Status</p>
                        <b>{{currentCharacter.status}}</b>
                    </div>
                    <div class="column is-centered">
                        <i class="fas fa-street-view"></i>
                        <p>Origin</p>
                       <b> {{currentCharacter.origin.name}}</b>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-4">
                      <p>  Gender</p>
                      <i class="fas" :class="[currentCharacter.gender == 'Male' ? 'fa-male' : 'fa-female']"></i>
                     <b> {{currentCharacter.gender}}</b>
                    </div>
                    <div class="column is-4">
                        <p>Location</p>
                        <i class="fas fa-globe-europe"></i>
                      <b> {{currentCharacter.location.name}}</b>
                    </div>
                    <div class="column is-4">
                        <p>Species</p>
                         <i class="fa-solid" :class="currentCharacter.species == 'Alien' ? 'fa-user-alien' : 'fa-user'"></i>
                      <b> {{currentCharacter.species}}</b>
                    </div>
                </div>
                <!-- <ul>
                    <li><strong>Gender:</strong>  {{currentCharacter.gender}}.</li>
                    <li><strong>Species:</strong> {{currentCharacter.species}}.</li>
                    <li><strong>Location:</strong> {{currentCharacter.location.name}}.</li>
                    <li><strong>Origin:</strong> {{currentCharacter.origin.name}}.</li>
                    <li><strong>Status:</strong> {{currentCharacter.status}}.</li>
                </ul> -->
            </div>

            <!-- <footer class="modal-card-foot">
                <button class="button is-danger" @click="$parent.show_modal = false">Close</button>
            </footer> -->
        </div>
</div>
</template>

<script>
export default {
    props: ['currentCharacter']
    
}
</script>