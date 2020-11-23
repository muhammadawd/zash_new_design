<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <itemHeaderView/>
            </div>
            <div class="col-md-8">
                <itemGalleryView/>
            </div>
            <div class="col-md-4">
                <itemDescription/>
            </div>
        </div>
    </div>
</template>

<script>
    import itemHeaderView from './Extentions/itemHeaderView'
    import itemGalleryView from './Extentions/itemGalleryView'
    import itemDescription from './Extentions/itemDescription'

    export default {
        name: "itemSkeleton",
        components: {itemDescription, itemGalleryView,itemHeaderView}
    }
</script>

<style scoped>

</style>