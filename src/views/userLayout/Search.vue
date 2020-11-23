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
    import searchSkeleton from './components/SkeletonLoaders/searchSkeleton'

    export default {
        name: "Search",
        components: {
            Header, Content, Filters, searchSkeleton
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