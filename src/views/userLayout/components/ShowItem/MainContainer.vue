<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <button v-if="has360Images()" class="mb-2 btn text-black font-weight-bold" @click="zoomerBool = !zoomerBool">
                        <span v-if="zoomerBool">
                            <i class="fa fa-eye"></i>
                            {{$t('show360')}}
                        </span>
                        <span v-if="!zoomerBool">
                            <i class="fa fa-eye-slash"></i>
                            {{$t('hide360')}}
                        </span>
                    </button>
                    <ItemGallery v-if="zoomerBool" :product="product"/>
                    <Images360 v-if="!zoomerBool" :product="product"/>
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
    import Images360 from './Images360'

    export default {
        name: "MainContainer",
        props: ['product'],
        components: {ItemInfo, ItemGallery, Images360},
        data() {
            return {
                zoomerBool: true
            }
        },
        methods: {
            has360Images() {
                let flag = false;

                let image_collection = _.map(this.product.product_option_values, 'image_collection');

                _.forEach(image_collection, (collection) => {
                    if (collection.length) flag = true
                });

                return flag
            }
        }
    }
</script>

<style scoped>

</style>