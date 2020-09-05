<template>
    <div class="border-shadow text-left p-2" id="filterMenu">
        <div class="row">
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font">{{$t('by_categories')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3">
                    <li class="mb-4"
                        v-for="(item) in  getAllCategories">
                        <a href="" class="category" :class="isSelectedCategory(item.id) ? 'active' : ''"
                           @click.prevent="selectCategory(item.id)">
                            <h5 class="size-xs font-weight-bold">{{item.translated.title}}</h5>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font">{{$t('by_price')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3">
                    <li class="zoom110">
                        <vue-slider v-model="value"/>
                    </li>
                </ul>
                <div class="text-black text-capitalize text-center font-weight-bold">price ${{value[0]}} - ${{value[1]}}
                </div>
            </div>
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font">{{$t('by_size')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3">
                    <li class="mb-3">
                        <div class="size-config">
                            <button class="btn btn-secondary text-uppercase btn-sm font-weight-bold border-1-gray m-1"
                                    v-for="(size,index) in ['small','medium','large','xl','xxl','extra Large']"
                                    @click="selected_size = size"
                                    :class="(size == selected_size) ? 'bg-black text-white': 'bg-white'">{{size}}
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font">{{$t('by_color')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3">
                    <li class="mb-3">

                        <div class="color-choose">
                            <div v-for="color in ['#d8d8d8','#f5a623','#e77878','#262626','#4a90e2','#fff']">
                                <input type="radio" :id="color" name="color" :value="color"/>
                                <label :for="color"><span :style="{background: color}"></span></label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/material.css'

    export default {
        name: "Filters",
        components: {
            VueSlider
        },
        props: {
            updateFilters: Function,
        },
        data() {
            return {
                selected_size: 'xl',
                value: [10, 60],
                selectedCategory: []
            }
        },
        mounted() {
            let category_id = this.$route.query.category_id
            if (category_id) {
                this.selectedCategory.push(parseInt(category_id))
                this.updateFilters(this.prepareFilters())
            }
        },
        computed: {
            getAllCategories() {
                return this.$store.getters['moduleCommon/getAllCategories']
            }
        },
        methods: {
            prepareFilters() {
                return {
                    category_ids: this.selectedCategory,
                }
            },
            selectCategory(id) {
                let selectedCategory = JSON.parse(JSON.stringify(this.selectedCategory));
                if (!selectedCategory.includes(id)) {
                    this.selectedCategory.push(id)
                }
                this.updateFilters(this.prepareFilters());
            },
            isSelectedCategory(id) {
                let selectedCategory = JSON.parse(JSON.stringify(this.selectedCategory));
                if (selectedCategory.includes(id)) {
                    return true
                }
                return false
            }
        }
    }
</script>

<style>
    a.category.active {
        text-decoration: line-through;
    }

    li:has(> a.category.active) {
        border: 1px solid #0f7dff;
    }
</style>