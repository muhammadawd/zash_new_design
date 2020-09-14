<template>
    <div>
        <Header/>
        <Content/>
    </div>
</template>

<script>
    import Header from './components/Search/Header'
    import Filters from './components/Search/Filters'
    import Content from './components/Search/Content'

    export default {
        name: "Search",
        components: {
            Header, Content, Filters
        },
        mounted() {

        },
        watch: {
            '$route'(to, from) {
                location.reload()
            }
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>