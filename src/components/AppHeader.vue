<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
    methods: {
        changeCategory() {
            console.log(this.store.category);
            const catUrl = `${this.store.apiUrl}?category=${this.store.category}`
            console.log(catUrl);
            axios.get(catUrl)
                .then(resp => {
                    console.log(resp);
                    this.store.characters = resp.data
                }).catch(err => {
                    console.log(err.message);
                    this.store.error = err.message
                })
        }
    }
}
</script>

<template>
    <header>
        <div class="logo d-flex">
            <img src="/breaking-bad-logo-png-transparent.png" alt="">
            <h1>Breaking Bad API</h1>
        </div>
        <div class="container">
            <select class="form-select my_form" aria-label="select cat" v-model="store.category"
                @change="changeCategory">
                <option selected>Select category</option>
                <option value="breaking+bad">Breaking Bad</option>
                <option value="better+call+saul">Better Call Saul</option>
            </select>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    .logo {
        img {
            height: 40px;
            align-self: center;
        }

        padding-left: 1rem;
    }

    .my_form {
        width: auto;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
}
</style>