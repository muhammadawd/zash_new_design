<template>
    <div id="app">
        <notifications position="bottom right"/>
        <fade-transition origin="center" mode="out-in" :duration="250">
            <router-view/>
        </fade-transition>
    </div>
</template>

<script>
    import {FadeTransition} from "vue2-transitions";

    export default {
        name: 'App',
        components: {FadeTransition},
        watch: {
            '$route'() {
            }
        },
        methods: {},
        async created() {
        }
    }
</script>
<style>
</style>