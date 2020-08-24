<template>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-left">
                    <h1 class="collection_title fun_font">{{$t('man_collection')}}</h1>
                </div>
            </div>
            <div class="row direction">
                <div class="col-md-7">
                    <div class="row text-left">
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 text-black">01</h2>
                            <img :src="require('@/assets/img/Bitmap_2@3x.png')" class="w-100" alt="">
                        </div>
                        <div class="col-md-7">
                            <h5 class="pt-5 mt-5">Caviar Leather Document Holder</h5>
                            <div class="relative">
                                <a href="" class="view_more_after">
                                    {{$t('view_more')}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row text-right">
                        <div class="col-md-7">
                            <h5 class="pt-5 mt-5">Caviar Leather Document Holder</h5>
                            <div class="relative">
                                <a href="" class="view_more_before">
                                    {{$t('view_more')}}
                                </a>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 text-black">02</h2>
                            <img :src="require('@/assets/img/Bitmap_3@3x.png')" class="w-100" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <hooper :centerMode="true" pagination="no" style="height: auto" :progress="true" :autoPlay="true"
                            dir="ltr"
                            :playSpeed="2000">
                        <slide>
                            <div class="collection_slide">
                                <img :src="require('@/assets/img/Bitmap_4@3x.png')" class="w-100" alt="">
                            </div>
                        </slide>
                        <slide>
                            <div class="collection_slide">
                                <img :src="require('@/assets/img/Bitmap_4@3x.png')" class="w-100" alt="">
                            </div>
                        </slide>
                        <slide>
                            <div class="collection_slide">
                                <img :src="require('@/assets/img/Bitmap_4@3x.png')" class="w-100" alt="">
                            </div>
                        </slide>
                        <slide>
                            <div class="collection_slide">
                                <img :src="require('@/assets/img/Bitmap_4@3x.png')" class="w-100" alt="">
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
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
        name: "ManCollection",
        components: {
            Hooper,
            Slide,
            HooperProgress,
            HooperPagination,
            HooperNavigation
        }
    }
</script>

<style scoped>

</style>