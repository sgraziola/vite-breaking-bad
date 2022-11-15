<script>
import { store } from '../store.js'
import CharacterItem from './CharacterItem.vue'
import TotalFound from './TotalFound.vue'
import LoadingItem from './LoadingItem.vue'

export default {
    name: 'CharactersList',
    components: {
        CharacterItem,
        TotalFound
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="characters" v-if="!store.loading">
        <div class="container">

            <TotalFound />
            <div class="row row-cols-5 g-4">
                <CharacterItem :character="character" v-for="character in store.characters" />
            </div>
        </div>
    </section>
    <LoadingItem v-else />
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