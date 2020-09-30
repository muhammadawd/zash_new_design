<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="bg-whites mb-3">
                        <ul class="grid_list">
                            <li class="list-inline-item p-2">
                                <a :class="layout  == 'list' ? 'active' : ''" href=""
                                   @click.prevent="layout = 'list'">
                                    <i class="ti-list fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item p-2">
                                <a :class="layout  == 'grid' ? 'active' : ''" href=""
                                   @click.prevent="layout = 'grid'">
                                    <i class="ti-layout-grid2 fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8">
                    <ItemGallery :layout="layout" :product="product"/>
                </div>
                <div class="col-md-4">
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
        components: {ItemInfo, ItemGallery},
        data() {
            return {
                layout: 'grid',
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>

</style>