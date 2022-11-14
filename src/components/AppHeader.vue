<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <h1>Breaking Bad API</h1>
        <div class="container">
            <select class="form-select my_form" aria-label="select cat">
                <option selected>Select category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.my_form {
    width: auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
}
</style>