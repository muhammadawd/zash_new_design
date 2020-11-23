<template>
    <div>
        <div id="contact_loader">
            <ContactSkeleton/>
        </div>
        <div id="contact_content" style="display: none">
            <Header/>
            <Content/>
        </div>
    </div>
</template>

<script>
    import Header from './components/Contact/Header'
    import Content from './components/Contact/Content'
    import ContactSkeleton from './components/SkeletonLoaders/ContactSkeleton'

    export default {
        name: "ContactUs",
        components: {
            Header, Content, ContactSkeleton
        },
        mounted() {

        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>