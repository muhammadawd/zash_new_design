<template>
    <div class="pt-5" v-if="getProduct">
        <div class="container">
            <div class="row direction text-left">
                <div class="col-md-12">
                    <div class="zoomImage">
                        <div class="discount">
                            <span>{{getPercent(getProduct.minimum_price,getProduct.price_before_discount)}}%</span>
                        </div>
                        <ProductZoomer v-if="files.length"
                                       :base-images="images"
                                       :base-zoomer-options="$helper.isMobile() ? zoomOptionsMobile : zoomOptions"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ItemGallery",
        props: ['product'],
        data() {
            return {
                files: [],
                images: {
                    'thumbs':    // optional, if not present will use normal_size instead
                        [],
                    'normal_size':  // required
                        []
                },
                zoomOptions: {
                    zoomFactor: 3,
                    pane: "container-round",
                    hoverDelay: 300,
                    namespace: "zoomer-left",
                    move_by_click: false,
                    scroll_items: 5,
                    choosed_thumb_border_color: "#dd2c00",
                    scroller_position: "left",
                    zoomer_pane_position: "right"
                },
                zoomOptionsMobile: {
                    zoomFactor: 3,
                    pane: "container-round",
                    hoverDelay: 300,
                    namespace: "zoomer-left",
                    move_by_click: true,
                    scroll_items: 5,
                    choosed_thumb_border_color: "#dd2c00",
                    scroller_position: "left",
                    zoomer_pane_position: "right"
                },
            }
        },
        mounted() {
            let files = [];

            files.push({'id': 1000, 'url': this.product.main_image});

            let povS = _.map(this.product.product_option_values, 'files');
            _.forEach(povS, (pov, k1) => {
                _.forEach(pov, (item, k2) => {
                    files.push({'id': k1 + '' + k2, 'url': item.path})
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

</style>