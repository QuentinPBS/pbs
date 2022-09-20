<template>
    
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name: 'Home',

        computed: {
            ...mapState({
                count: state => state.count
            })
        }
    }
</script>