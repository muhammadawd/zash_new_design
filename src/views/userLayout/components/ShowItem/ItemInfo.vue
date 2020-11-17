<template>
    <div class="pb-5 bg-details">
        <div class="container">
            <div class="row direction text-left">
                <div class="col-md-12">
                    <h6>{{getProduct.model_number}}</h6>
                </div>
                <div class="col-md-12">
                    <h2>{{getProduct.translated.title}}</h2>
                </div>
                <div class="col-md-10">
                    <div v-html="getProduct.translated.description"></div>
                </div>
                <div class="col-md-12" v-if="getProduct.minimum_price">
                    <h1 class="font-weight-bold mt-3 size-xs">
                        <del class="size-xs" v-if="getProduct.price_before_discount">
                            {{(getProduct.price_before_discount).toLocaleString('en-US')}} {{$t('kwd')}}
                        </del>
                        {{(getProduct.minimum_price).toLocaleString('en-US')}} {{$t('kwd')}}
                    </h1>
                </div>
                <div class="col-md-12 optionsLists">
                    <ul class="text-black direction font-weight-bold mt-5">
                        <li class="mb-3" v-for="(pov , index) in getProduct.product_option_values">
                            <i class="fas fa-circle text-danger size-10"
                               v-if="pov.product_option_value_details.length"></i>
                            <span class="text-capitalize" v-for="(povd,key) in pov.product_option_value_details">
                                {{povd.option_value.option.translated.title}} :
                                {{povd.option_value.translated.title}}
                                <span v-if="pov.product_option_value_details.length > key+1">,</span>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 mt-5" v-for="(collection,index) in image_collections" :key="index" :index="index"
                     v-if="collection.length">
                    <a href="" @click.prevent="show3D(collection)"
                       class="font-weight-bold text-black size-xs text-capitalize"
                       style="text-decoration: underline">
                        <img :src="require('@/assets/img/360.jpg')" width="40px">
                        {{$t('image360')}}
                    </a>
                </div>
                <div class="col-md-12 mt-5">
                    <ul class="mt-2 direction">
                        <li class="list-inline-item animationIcon iconRounded">
                            <a class="text-black" href="" @click.prevent>
                                <ShareNetwork
                                        network="facebook"
                                        :url="getShareData(product).url"
                                        :title="getShareData(product).title"
                                        :description="getShareData(product).description"
                                        :quote="getShareData(product).description"
                                        hashtags="shopping">
                                    <i class="fab fa-facebook fa-lg"></i>
                                </ShareNetwork>
                            </a>
                        </li>
                        <li class="list-inline-item animationIcon iconRounded">
                            <a class="text-black" href="" @click.prevent>
                                <ShareNetwork
                                        network="twitter"
                                        :url="getShareData(product).url"
                                        :title="getShareData(product).title"
                                        :description="getShareData(product).description"
                                        :quote="getShareData(product).description"
                                        hashtags="shopping">
                                    <i class="fab fa-twitter fa-lg"></i>
                                </ShareNetwork>
                            </a>
                        </li>
                        <li class="list-inline-item animationIcon iconRounded">
                            <a class="text-black" href="" @click.prevent="shareWhatsapp()">
                                <i class="fab fa-whatsapp fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="galley_container" v-if="showGallery">
            <div class="toolbar text-center p-2">
                <button class="float-right bg-transparent" @click="showGallery = false">
                    <i class="fa fa-times"></i>
                </button>
                <h4>{{$t('image360')}}</h4>
            </div>
            <hr class="m-0 p-0">
            <div class="row justify-content-center" v-if="my3dImages.length">
                <div class="col-md-4 col-12 mt-5">
                    <VueProductSpinner :images="my3dImages">
                    </VueProductSpinner>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VueProductSpinner from 'vue-product-spinner'

    export default {
        name: "ItemInfo",
        props: ['product'],
        components: {VueProductSpinner},
        data() {
            return {
                has3dImages: false,
                showGallery: false,
                image_collections: [],
                my3dImages: [],
            }
        },
        mounted() {
            this.has360Image();
        },
        computed: {
            getProduct() {
                return this.product;
            }
        },
        methods: {
            show3D(collection) {
                this.showGallery = true;
                this.my3dImages = collection;
            },
            has360Image() {
                let flag = false;

                let image_collections = _.map(this.product.product_option_values, 'image_collection');
                this.image_collections = image_collections;

                _.forEach(image_collections, (collection) => {
                    if (collection.length) flag = true
                });

                if (flag) this.has3dImages = true
            },
            getShareData(product) {
                return {
                    url: window.location.href,
                    title: 'تسوق افضل  المنتجات الان',
                    description: product.translated ? product.translated.title : ''
                }
            },
            shareWhatsapp() {
                let current = window.location.href;
                window.location.href = `https://api.whatsapp.com/send?text=${current}`;
            },
        }
    }
</script>

<style scoped>

</style>