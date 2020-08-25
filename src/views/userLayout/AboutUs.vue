<template>
    <div>
        <Header/>
        <Content/>
    </div>
</template>

<script>
    import Header from './components/About/Header'
    import Content from './components/About/Content'

    export default {
        name: "About",
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