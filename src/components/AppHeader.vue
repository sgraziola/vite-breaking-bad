<script>
import SelectItem from './SelectItem.vue';

export default {
    name: 'AppHeader',
    components: {
        SelectItem
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
            <SelectItem />
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
}
</style>