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
            store,
        }
    }
}
</script>

<template>
    <section class="characters">
        <div class="container">
            <div class="total_found">
                <span>Found {{ store.characters.length }} characters</span>
            </div>
            <!-- <div class="loader">
                <img src="/breaking-bad-logo-png-transparent.png" alt="">
                <p>Attendere! Caricamento Personaggi...</p>
            </div> -->
            <div class="row row-cols-5 g-4">
                <CharacterItem :character="character" v-for="character in store.characters" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.characters {
    .container {
        background-color: $light;
        padding: 2rem;

        .total_found {
            background-color: $secondaryBg;
            padding: 0.5rem 0.5rem;
            margin: 1rem 0;
            font-size: smaller;
            font-weight: bolder;
        }

        .loader {
            color: black;
            height: 100vh;
            text-align: center;
            margin-top: 15rem;

            img {
                width: 150px;
            }
        }
    }
}
</style>