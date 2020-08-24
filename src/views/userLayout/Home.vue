<template>
    <div>
        <Header/>
        <MainContainer/>
        <ManCollections/>
        <WomenCollections/>
        <newArrival/>
        <GetInTouch/>
    </div>
</template>

<script>
    import Header from './components/Home/Header'
    import MainContainer from './components/Home/MainContainer'
    import ManCollections from './components/Home/ManCollections'
    import WomenCollections from './components/Home/WomenCollections'
    import newArrival from './components/Home/newArrival'
    import GetInTouch from './components/Home/GetInTouch'

    export default {
        name: "Home",
        components: {
            Header, MainContainer, ManCollections, WomenCollections, newArrival, GetInTouch
        },
        mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>