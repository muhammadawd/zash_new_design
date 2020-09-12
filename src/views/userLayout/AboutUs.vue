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
        computed: {},
    }
</script>

<style scoped>

</style>