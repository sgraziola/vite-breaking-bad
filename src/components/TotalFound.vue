<script>
import { store } from '../store';
export default {
    name: 'TotalFound',
    data() {
        return {
            store
        }
    },
    computed: {
        totalFound() {
            return this.store.characters.length
        }
    }
}
</script>      
            
<template>
    <div class="total_found">
        <span>Found {{ totalFound }} characters</span>
    </div>
</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as *;

.total_found {
    background-color: $secondaryBg;
    padding: 0.5rem 0.5rem;
    margin: 1rem 0;
    font-size: smaller;
    font-weight: bolder;
}
</style>