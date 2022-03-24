<template>
    <div class="modal" :class="{'is-active': $parent.show_modal}" v-if="$parent.show_modal">
        <div class="modal-background" @click="$parent.show_modal = false"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">About {{currentLocation.name}}</p>
                    <button class="delete" @click.prevent="$parent.show_modal = false" aria-label="close"></button>
            </header>
            <div class="modal-card-body">
                <ul>
                    <li><strong>Name:</strong> {{currentLocation.name}}.</li>
                    <li><strong>Type:</strong> {{currentLocation.type}}.</li>
                    <li><strong>Dimension:</strong> {{currentLocation.dimension}}.</li>
                    <li><strong>Residents:</strong> {{currentLocation.residents.length}}.</li>
                    <!-- <li><strong>Status:</strong> {{currentLocation.status}}.</li> -->
                </ul>
            </div>

            <!-- <footer class="modal-card-foot">
                <button class="button is-danger" @click="$parent.show_modal = false">Close</button>
            </footer> -->
        </div>
</div>
</template>

<script>
export default {
    props: ['currentLocation']
    
}
</script>