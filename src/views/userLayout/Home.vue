<template>
    <div>
        <Header/>
        <WhoUs/>
        <Features v-for="(category , index) in getAllCategories" :bgColor="(index % 2 == 0) ? '#fff' : '#eee'"
                  :category="category"/>
        <newsLetter/>
        <FAQ/>
        <Testimonial/>
    </div>
</template>

<script>
    import Header from './components/Home/Header'
    import WhoUs from './components/Home/WhoUs'
    import Features from './components/Home/Features'
    import newsLetter from './components/Home/newsLetter'
    import FAQ from './components/Home/FAQ'
    import Testimonial from './components/Home/Testimonial'

    export default {
        name: "Home",
        components: {
            Header, WhoUs, Features, newsLetter, FAQ, Testimonial
        },
        mounted() {

        },
        computed: {
            getAllCategories() {
                return this.$store.getters['moduleCategory/getAllCategories'];
            },
        },
        methods: {}
    }
</script>

<style scoped>

</style>