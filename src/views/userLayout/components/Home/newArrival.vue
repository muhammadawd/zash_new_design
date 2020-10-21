<template>
    <div class="mt-5" v-if="getSettings.show_new_arrival && getSettings.show_new_arrival[0].value">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-left">
                    <h1 class="collection_title fun_font">{{$t('new_arrival')}}</h1>
                </div>
            </div>
        </div>
        <div class="container-fluids">
            <div class="row">
                <div class="col-md-12">
                    <hooper :settings="hooperSettings" style="height: auto">
                        <slide v-for="(product , index) in getRecentProducts" class="pointer"
                               @click="$router.push({name:'show_item',params:{slug:product.slug}})">
                            <div class="collection_slide p-2"
                                 @click="$router.push({name:'show_item',params:{slug:product.slug}})">
                                <img :src="product.main_image ? product.main_image:  require('@/assets/img/noimage.png')" class="w-100 bg-white" alt="">
                            </div>
                        </slide>
                        <hooper-navigation class="black_navigation" slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Progress as HooperProgress,
        Pagination as HooperPagination,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';

    export default {
        name: "newArrival",
        components: {
            Hooper,
            Slide,
            HooperProgress,
            HooperPagination,
            HooperNavigation
        },
        computed: {
            getRecentProducts() {
                return this.$store.getters['moduleCommon/getAllRecentProducts']
            },
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 1.25,
                    autoPlay: true,
                    playSpeed: 3000,
                    infiniteScroll: true,
                    centerMode: true,
                    wheelControl: false,
                    breakpoints: {
                        800: {
                            centerMode: false,
                            itemsToShow: 3
                        },
                        1000: {
                            itemsToShow: 4,
                            pagination: 'fraction'
                        }
                    }
                }
            }
        }
    }
</script>

<style>
</style>