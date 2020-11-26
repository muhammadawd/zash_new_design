<template>
    <div>
        <div id="snapchat_loader">
            <AboutSkeleton/>
        </div>
        <div id="snapchat_content" style="display:none;">
            <Content/>
        </div>
    </div>
</template>

<script>
    import Content from './components/SnapChat/Content'
    import AboutSkeleton from './components/SkeletonLoaders/AboutSkeleton'

    export default {
        name: "Snap",
        components: { Content, AboutSkeleton
        },
        computed: {},
    }
</script>

<style scoped>

</style>