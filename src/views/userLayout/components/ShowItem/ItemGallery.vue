<template>
    <div v-if="getProduct && files.length">
        <div class="container p-0 m-0">
            <div class="row direction text-left d-none d-md-flex">
                <div class="mb-4" :class="layout == 'list' ? 'col-md-12':'col-md-6 '" v-for="(file , index) in files"
                     :key="index" :index="index">
                    <div class="zoomImage" dir="ltr" @click="clickSlide(file)">
                        <div class="discount"
                             v-if="getPercent(getProduct.minimum_price,getProduct.price_before_discount) && index == 0">
                            <span>{{getPercent(getProduct.minimum_price,getProduct.price_before_discount)}}%</span>
                        </div>
                        <img :src="file" class="w-100 bg-gray" alt="">
                    </div>
                </div>
            </div>
            <div class="row direction text-left d-md-none">
                <div class="col-12">
                    <div class="swiperImage" dir="ltr">
                        <swiper ref="mySwiper" :options="swiperOptions">
                            <swiper-slide v-for="(file , index) in files" :key="index" :index="index">
                                <div class="zoomImage p-1" dir="ltr" @click="clickSlide(file)">
                                    <div class="discount"
                                         v-if="getPercent(getProduct.minimum_price,getProduct.price_before_discount) && index == 0">
                                        <span>{{getPercent(getProduct.minimum_price,getProduct.price_before_discount)}}%</span>
                                    </div>
                                    <img :src="file" class="w-100 bg-gray" alt="">
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <div class="galley_container" v-if="showGallery">
            <div class="toolbar text-center p-2">
                <button class="float-right bg-transparent" @click="showGallery = false">
                    <i class="fa fa-times"></i>
                </button>
                <h2>{{$t('galley')}}</h2>
            </div>
            <hr class="m-0 p-0">
            <div class="row" style="max-height: 100vh;overflow-y: scroll">
                <div class="col-md-4 mt-1 mb-1" v-for="(file , index) in files" :key="index" :index="index">
                    <img :src="file" class="w-100 bg-gray" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vZoom from 'vue-zoom'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'

    export default {
        name: "ItemGallery",
        props: ['product', 'layout'],
        // directives: {
        //     swiper: directive
        // },
        components: {vZoom, swiper, swiperSlide},
        data() {
            return {
                showGallery: false,
                current_image: null,
                current_collection: [],
                files: [],
                image_collections: [],
                swiperOptions: {
                    loop: true,
                    slidesPerView: 1,
                    centeredSlides: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        progressbarOpposite: true
                    }
                    // pagination: {
                    //     el: ".swiper-pagination",
                    //     type: "bullets",
                    //     clickable: true,
                    // },
                },
                images: {
                    'thumbs':    // optional, if not present will use normal_size instead
                        [],
                    'normal_size':  // required
                        []
                },
            }
        },
        mounted() {
            let files = [];

            // files.push({'id': 1000, 'url': this.product.main_image});
            files.push(this.product.main_image);
            // this.current_image = this.product.main_image;


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
            clickSlide(file) {
                console.log(file)
                this.showGallery = true;
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

</style>