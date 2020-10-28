<template>
    <div>
        <Header/>
        <Content/>
    </div>
</template>

<script>
    import Header from './components/Career/Header'
    import Content from './components/Career/Content'

    export default {
        name: "Career",
        components: {
            Header, Content
        },
        mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>