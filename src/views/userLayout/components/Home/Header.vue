<template>
    <div class="home_slider pt-5" v-if="getSliders.length" :style="{background: bgColor}">
        <div class="containers">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12">
                    <hooper :settings="hooperSettings" style="height: auto">
                        <!--class="pointer" @click="$router.push({name:'show_item',params:{slug:product.slug}})"-->
                        <slide v-for="(slide ,k) in getSliders">
                            <div class="collection_slide p-2">
                                <img :src="slide.image" class="w-100 bg-white" alt="">
                            </div>
                        </slide>
                        <hooper-navigation class="black_navigation" slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </div>
            </div>
            <div class="row justify-content-start text-center" style="position:absolute;width: 100%;bottom: 0;">
                <div class="col-md-11">
                    <div class="new_collection pointer" @click="$router.push({name:'search'})">
                        <div class="border_collection"></div>
                        {{$t('new_collection')}}
                        <i class="ti-arrow-right"></i>
                    </div>
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
    // import 'animate.css'

    export default {
        name: "Header",
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
                    itemsToShow: 2.25,
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
                },
                sliders: [],
                bgColor: '#f0e8d9',
            }
        },
        mounted() {
            let vm = this;
            vm.getSliderFunctionality();
        },
        computed: {
            getSliders() {
                return this.$store.getters['moduleSlider/getAllSliders'];
            },
        },
        methods: {
            getSliderFunctionality() {
                let vm = this;
                // setInterval(() => {
                //     let colors = ['#ecdada', '#dde9ed', '#f7d0cb', '#ecdada', '#dde9ed', '#f7d0cb', '#ecdada', '#dde9ed', '#f7d0cb']
                //     let rand = Math.floor(Math.random() * 6) + 1;
                //     vm.bgColor = colors[rand];
                // }, 2000)
            },
        }
    }
</script>

<style scoped>

</style>