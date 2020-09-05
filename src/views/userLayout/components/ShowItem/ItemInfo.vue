<template>
    <div class="pt-5">
        <div class="container">
            <div class="row direction text-left">
                <div class="col-md-12">
                    <h1>{{getProduct.translated.title}}</h1>
                </div>
                <div class="col-md-12">
                    <h1 class="font-weight-bold mt-3">
                        <del class="size-xs">{{getProduct.price_before_discount}} {{$t('kwd')}}</del>
                        {{getProduct.minimum_price}} {{$t('kwd')}}
                    </h1>
                </div>
                <div class="col-md-12 optionsList">
                    <ul class="text-black direction font-weight-bold mt-5">
                        <li class="mb-3" v-for="(pov , index) in getProduct.product_option_values">
                            <i class="fas fa-circle text-danger size-10"></i>
                            <span class="text-capitalize" v-for="(povd) in pov.product_option_value_details">
                                {{povd.option_value.option.translated.title}} :
                                {{povd.option_value.translated.title}} ,
                            </span>
                        </li>
                    </ul>
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
    </div>
</template>

<script>
    export default {
        name: "ItemInfo",
        props: ['product'],
        data() {
            return {}
        },
        mounted() {
        },
        computed: {
            getProduct() {
                return this.product;
            }
        },
        methods: {
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