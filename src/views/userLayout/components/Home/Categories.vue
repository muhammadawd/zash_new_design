<template>
    <div>
        <div class="container">
            <div class="row">
                <!--<div class="col-md-6 p-0" v-for="(category , index) in getAllCategories" :key="index">-->
                <!--<div class="category_item" :class="index%2 == 0 ? 'bg-1' : 'bg-2'">-->
                <!--<h1 class="fun_font text-left category_name">{{category.translated.title}}</h1>-->
                <!--<img :src="category.main_image" class="w-100" alt=""/>-->
                <!--</div>-->
                <!--</div>-->
                <hooper :settings="hooperSettings" style="height: auto;;overflow: hidden">
                    <slide v-for="(category , index) in getAllCategories"
                           :key="index">
                        <div class="collection_slide pointer">
                            <div class="category_item"
                                 @click="$router.push({name:'search',query:{category_id:category.id}})"
                                 :class="index%2 == 0 ? 'bg-1' : 'bg-2'">
                                <h1 class="fun_font text-left category_name">{{category.translated.title}}</h1>
                                <img :src="category.main_image" class="w-50 ml-5" alt=""/>
                            </div>
                        </div>
                    </slide>
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
            getAllCategories() {
                return this.$store.getters['moduleCommon/getAllCategories']
            }
        },
    }
</script>

<style scoped>

</style>