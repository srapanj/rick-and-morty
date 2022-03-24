<template>
    <div class="modal" :class="{'is-active': $parent.show_modal}" v-if="$parent.show_modal">
        <div class="modal-background" @click="$parent.show_modal = false"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">About {{currentCharacter.name}}</p>
                    <button class="delete" @click.prevent="$parent.show_modal = false" aria-label="close"></button>
            </header>
            <div class="modal-card-body">
                <ul>
                    <li><strong>Gender:</strong> {{currentCharacter.gender}}.</li>
                    <li><strong>Species:</strong> {{currentCharacter.species}}.</li>
                    <li><strong>Location:</strong> {{currentCharacter.location.name}}.</li>
                    <li><strong>Origin:</strong> {{currentCharacter.origin.name}}.</li>
                    <li><strong>Status:</strong> {{currentCharacter.status}}.</li>
                </ul>
                <!-- <strong>Gender:</strong>
                <p>{{currentCharacter.gender}}</p>
                <strong>Status:</strong>
                <p>{{currentCharacter.status}}</p>
                <strong>Specie:</strong>
                <p>{{currentCharacter.species}}</p> -->
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