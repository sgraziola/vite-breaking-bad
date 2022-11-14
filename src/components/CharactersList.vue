<script>
import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue'

export default {
    name: 'CharactersList',
    components: {
        CharacterItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="characters">
        <div class="container">
            <div class="total_found">
                <p>Found 62 characters</p>
            </div>
            <div class="row row-cols-5">
                <CharacterItem :character="character" v-for="character in store.characters" />
            </div>
        </div>
    </section>
</template>