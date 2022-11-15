<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "SelectItem",
    data() {
        return {
            store
        }
    },

    methods: {
        changeCategory() {
            console.log(this.store.category);
            if (this.store.category === "Select category") {
                this.store.category = ""
            }
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
    <select class="form-select my_form" aria-label="select cat" v-model="store.category" @change="changeCategory">
        <option selected>Select category</option>
        <option value="breaking+bad">Breaking Bad</option>
        <option value="better+call+saul">Better Call Saul</option>
    </select>
</template>

<style lang="scss" scoped>
.my_form {
    width: auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
}
</style>