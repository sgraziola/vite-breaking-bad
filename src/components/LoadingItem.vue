<script>
import { store } from '../store';
export default {
    name: 'LoadingItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="loader">
        <img src="../" alt="">
        <p>Attendere! Caricamento Personaggi...</p>
    </div>
</template>

<style lang="scss">
.loader {
    color: black;
    height: 100vh;
    text-align: center;
    margin-top: 15rem;

    img {
        width: 150px;
    }
}
</style>