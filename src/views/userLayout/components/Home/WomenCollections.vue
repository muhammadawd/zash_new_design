<template>
    <div class="mt-5" v-if="section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-right">
                    <h1 class="collection_title fun_font">{{section.translated.main_title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4" v-if="section.files.length">
                    <hooper :centerMode="true" pagination="no" style="height: auto" :wheelControl="false"
                            :progress="true" :autoPlay="true"
                            dir="ltr"
                            :playSpeed="2000">
                        <slide v-for="(slide,index) in section.files">
                            <div class="collection_slide">
                                <img :src="slide.path" class="w-100" alt="">
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                    </hooper>
                </div>
                <div class="col-md-7">
                    <div class="row text-right d-none d-md-flex">
                        <div class="col-md-7">
                            <h5 class="pt-5 mt-5">{{section.translated.first_title}}</h5>
                            <div class="relative">
                                <a href=""
                                   @click.prevent="$router.push({name: 'search', query: {category_id: section.first_categories}})"
                                   class="view_more_before">
                                    {{$t('view_more')}}
                                </a>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 text-black">01</h2>
                            <img :src="section.first_image_path" class="w-100" alt="">
                        </div>
                    </div>
                    <div class="row text-right d-md-none">
                        <div class="col-md-7 mt-5">
                            <img :src="section.first_image_path" class="w-100" alt="">
                        </div>
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 mt-5 text-black">01</h2>
                            <h5 class="pt-5">{{section.translated.first_title}}</h5>
                            <div class="relative">
                                <a href=""
                                   @click.prevent="$router.push({name: 'search', query: {category_id: section.first_categories}})"
                                   class="view_more_before">
                                    {{$t('view_more')}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row text-right mt-3">

                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 d-none d-md-flex text-black">02</h2>
                            <img :src="section.second_image_path" class="w-100" alt="">
                        </div>
                        <div class="col-md-7 text-left">
                            <h2 class="fun_font mb-0 pb-0 mt-5 d-md-none text-black">02</h2>
                            <h5 class="pt-5 ">{{section.translated.second_title}}</h5>
                            <div class="relative">
                                <a href=""
                                   @click.prevent="$router.push({name: 'search', query: {category_id: section.second_categories}})"
                                   class="view_more_after">
                                    {{$t('view_more')}}
                                </a>
                            </div>
                        </div>
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

    import 'hooper/dist/hooper.css';

    export default {
        name: "WomenCollection",
        props: ['section'],
        data() {
            return {}
        },
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