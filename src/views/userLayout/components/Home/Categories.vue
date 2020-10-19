<template>
    <div>
        <div class="container">
            <div class="row">
                <hooper :settings="hooperSettings" style="height: auto;overflow: hidden;padding: 50px 0 0;">
                    <slide v-for="(category , index) in getAllCategoriesSub"
                           :key="index">
                        <div class="collection_slide pointer">
                            <div class="category_item bg-white"
                                 :class="index%2 == 0 ? 'bg-1' : 'bg-2'">
                                <h1 class="fun_font text-left font-weight-normal category_name"
                                    @click="$router.push({name:'search',query:{category_id:category.id}})">
                                    {{category.parent_category ? category.parent_category.translated.title : ''}} -
                                    {{category.translated.title}}</h1>
                                <img :src="category.main_image"
                                     @click="$router.push({name:'search',query:{category_id:category.id}})"
                                     class="w-50 ml-5" alt=""/>
                            </div>
                        </div>
                    </slide>
                    <hooper-navigation class="black_navigation" slot="hooper-addons"></hooper-navigation>
                </hooper>
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
        name: "Categories",
        data() {
            return {
                hooperSettings: {
                    itemsToShow: 2,
                    autoPlay: true,
                    keysControl: false,
                    playSpeed: 2000,
                    infiniteScroll: true,
                    centerMode: false,
                    wheelControl: false,
                }
            }
        },
        components: {
            Hooper,
            Slide,
            HooperProgress,
            HooperPagination,
            HooperNavigation
        },
        computed: {
            getAllCategoriesSub() {
                return this.$store.getters['moduleCommon/getAllCategoriesSub']
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>