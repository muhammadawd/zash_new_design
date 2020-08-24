<template>
    <div>
        <Header/>
        <MainContainer/>
        <ItemDescription/>
        <RecommendedItems/>
    </div>
</template>

<script>
    import Header from './components/ShowItem/Header'
    import RecommendedItems from './components/ShowItem/RecommendedItems'
    import ItemDescription from './components/ShowItem/ItemDescription'
    import MainContainer from './components/ShowItem/MainContainer'

    export default {
        name: "ShowItem",
        components: {
            Header, RecommendedItems, MainContainer, ItemDescription
        },
        mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>