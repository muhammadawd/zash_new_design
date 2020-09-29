<template>
    <div v-if="getProduct && files.length">
        <div class="container p-0 m-0">
            <div class="row direction text-left">
                <div class="col-3 p-0">
                    <ul>
                        <li v-for="image in files">
                            <div class="p-1 mb-1 bg-white text-center overflowhidden"
                                 :class="image == current_image ? 'active_slide' : ''"
                                 @click="showZoomer(image)">
                                <img :src="image" alt="" width="120px">
                            </div>
                        </li>
                        <template v-for="collection in image_collections">
                            <li v-for="(image, index) in collection" v-if="index == 0">
                                <div class="p-1 mb-1 bg-white text-center overflowhidden"
                                     :class="image == current_image ? 'active_slide' : ''"
                                     @click="show3d(collection)">
                                    <img :src="image" alt="" width="120px">
                                </div>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="col-9">
                    <div class="zoomImage" dir="ltr">
                        <div class="discount"
                             v-if="getPercent(getProduct.minimum_price,getProduct.price_before_discount)">
                            <span>{{getPercent(getProduct.minimum_price,getProduct.price_before_discount)}}%</span>
                        </div>
                        <div class="bg-white" v-if="!is3d">
                            <v-zoom v-if="current_image" :img="current_image" :width="'100%'"></v-zoom>
                        </div>
                        <div class="bg-white" v-if="is3d">
                            <VueProductSpinner :images="current_collection">
                            </VueProductSpinner>
                        </div>
                        <!--<ProductZoomer v-if="files.length"-->
                        <!--:base-images="images"-->
                        <!--:base-zoomer-options="$helper.isMobile() ? zoomOptionsMobile : zoomOptions"-->
                        <!--/>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vZoom from 'vue-zoom'
    import VueProductSpinner from 'vue-product-spinner'

    export default {
        name: "ItemGallery",
        props: ['product'],
        components: {vZoom, VueProductSpinner},
        data() {
            return {
                is3d: false,
                current_image: null,
                current_collection: [],
                files: [],
                image_collections: [],
                images: {
                    'thumbs':    // optional, if not present will use normal_size instead
                        [],
                    'normal_size':  // required
                        []
                },
                zoomOptions: {
                    zoomFactor: 3,
                    pane: "pane",
                    hoverDelay: 300,
                    namespace: "zoomer-left",
                    move_by_click: false,
                    scroll_items: 5,
                    choosed_thumb_border_color: "#000",
                    scroller_position: "left",
                    zoomer_pane_position: "right"
                },
                zoomOptionsMobile: {
                    zoomFactor: 3,
                    pane: "container-round",
                    hoverDelay: 300,
                    namespace: "zoomer-right",
                    move_by_click: true,
                    scroll_items: 5,
                    choosed_thumb_border_color: "#000",
                    scroller_position: "left",
                    zoomer_pane_position: "right"
                },
            }
        },
        mounted() {
            let files = [];

            // files.push({'id': 1000, 'url': this.product.main_image});
            files.push(this.product.main_image);
            this.current_image = this.product.main_image;

            let image_collections = _.map(this.product.product_option_values, 'image_collection');
            this.image_collections = image_collections

            let povS = _.map(this.product.product_option_values, 'files');
            _.forEach(povS, (pov, k1) => {
                _.forEach(pov, (item, k2) => {
                    // files.push({'id': k1 + '' + k2, 'url': item.path})
                    files.push(item.path)
                })
            })
            this.files = files
            this.images.thumbs = files
            this.images.normal_size = files
        },
        computed: {
            getProduct() {
                return this.product;
            }
        },
        methods: {
            show3d(collection) {
                this.is3d = true;
                this.current_collection = collection;
                this.current_image = collection[0];
            },
            showZoomer(image) {
                this.is3d = false;
                this.current_image = null;
                this.current_image = image;
            },
            getPercent(numVal1, numVal2) {
                let percentChange = 0;
                if ((numVal1 != 0) && (numVal2 != 0)) {
                    percentChange = (1 - numVal1 / numVal2) * 100;
                }
                return Math.round(parseFloat(percentChange));
            }
        }
    }
</script>

<style scoped>
    .active_slide {
        border: 1px solid #777;
    }

    .overflowhidden {
        overflow: hidden;
    }
</style>