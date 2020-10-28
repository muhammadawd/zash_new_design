<template>
    <div>
        <Header/>
        <Content/>
    </div>
</template>

<script>
    import Header from './components/Privacy/Header'
    import Content from './components/Privacy/Content'

    export default {
        name: "Privacy",
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