<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <ItemGallery :product="product"/>
                </div>
                <div class="col-md-5">
                    <ItemInfo :product="product"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemInfo from './ItemInfo'
    import ItemGallery from './ItemGallery'

    export default {
        name: "MainContainer",
        props: ['product'],
        components: {ItemInfo, ItemGallery}
    }
</script>

<style scoped>

</style>