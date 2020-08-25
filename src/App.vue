<template>
    <div id="app" style="overflow-x: hidden;">
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
                $('.nav-menus-wrapper-close-button').trigger('click')
            }
        },
        methods: {},
        async created() {
        }
    }
</script>
<style>
</style>