<template>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-left">
                    <h1 class="collection_title fun_font">{{$t('you_may_like')}}</h1>
                </div>
            </div>
        </div>
        <div class="container-fluids">
            <div class="row">
                <div class="col-md-12">
                    <hooper :settings="hooperSettings" style="height: auto">
                        <slide class="pointer" @click="$router.push({name:'show_item',params:{id:1}})">
                            <div class="collection_slide p-2 " @click="$router.push({name:'show_item',params:{id:1}})">
                                <img :src="require('@/assets/img/1.png')" class="w-100" alt="">
                                <div class="p-1">
                                    <div class="font-weight-bold text-black">Women's Dolman Sleeve Bodysuit</div>
                                    <h4 class="font-weight-bold text-black">$ 25</h4>
                                </div>
                            </div>
                        </slide>
                        <slide class="pointer" @click="$router.push({name:'show_item',params:{id:1}})">
                            <div class="collection_slide p-2 " @click="$router.push({name:'show_item',params:{id:1}})">
                                <img :src="require('@/assets/img/2.png')" class="w-100" alt="">
                                <div class="p-1">
                                    <div class="font-weight-bold text-black">Women's Dolman Sleeve Bodysuit</div>
                                    <h4 class="font-weight-bold text-black">$ 25</h4>
                                </div>
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
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 1.25,
                    autoPlay: true,
                    playSpeed: 3000,
                    infiniteScroll: true,
                    centerMode: true,
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