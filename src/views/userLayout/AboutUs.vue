<template>
    <div>
        <div id="about_loader">
            <AboutSkeleton/>
        </div>
        <div id="about_content" style="display:none;">
            <Header/>
            <Content/>
        </div>
    </div>
</template>

<script>
    import Header from './components/About/Header'
    import Content from './components/About/Content'
    import AboutSkeleton from './components/SkeletonLoaders/AboutSkeleton'

    export default {
        name: "About",
        components: {
            Header, Content, AboutSkeleton
        },
        computed: {},
    }
</script>

<style scoped>

</style>