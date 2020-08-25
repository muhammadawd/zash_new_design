<template>
    <div>
        <Header/>
        <Content/>
    </div>
</template>

<script>
    import Header from './components/Contact/Header'
    import Content from './components/Contact/Content'

    export default {
        name: "ContactUs",
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