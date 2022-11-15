<script>
export default {
    name: 'LoaderItem',
}
</script>

<template>
    <div class="loader">
        <img src="/breaking-bad-logo-png-transparent.png" alt="">
        <p>Attendere! Caricamento Personaggi...</p>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.loader {
    background-color: $light;
    color: black;
    height: 100vh;
    text-align: center;
    margin-top: 15rem;

    img {
        width: 150px;
    }
}
</style>