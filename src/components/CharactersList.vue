<script>
import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue'
import TotalFound from './TotalFound.vue'
import LoaderItem from './LoaderItem.vue'

export default {
    name: 'CharactersList',
    components: {
        CharacterItem,
        TotalFound,
        LoaderItem
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="characters">
        <div class="container">

            <TotalFound />
            <div class="row row-cols-5 g-4" v-if="!store.loading">
                <CharacterItem :character="character" v-for="character in store.characters" />
            </div>
            <LoaderItem v-else />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.characters {
    .container {
        background-color: $light;
        padding: 2rem;
    }
}
</style>