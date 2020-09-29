<template>
    <div v-if="product">
        <div class="container p-0 m-0">
            <div class="row direction justify-content-center text-left">
                <div class="col-md-12  text-black font-weight-bold" v-for="imgs in getImages()" v-if="imgs.length">
                    <VueProductSpinner :images="imgs">

                    </VueProductSpinner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueProductSpinner from 'vue-product-spinner'

    export default {
        name: "Images360",
        props: ['product'],
        components: {
            VueProductSpinner
        },
        data() {
            return {}
        },
        mounted() {
        },
        methods: {
            getImages() {
                let image_collection = _.map(this.product.product_option_values, 'image_collection');
                return image_collection;
            }
        },
        computed: {
            getDescription() {
                return this.productDescription.description;
            }
        },
    }
</script>

<style scoped>

</style>