<template>
    <div class="border-shadows text-left p-2" id="filterMenu">
        <div class="row">
            <div class="col-12 mb-5">

                <h2 class="font-weight-bold fun_font m-0">{{$t('by_query')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <form class="search-form" @submit.prevent="searchQuery()">
                    <input type="search" v-model="query" :placeholder="$t('search')" class="search-input">
                    <button type="submit" class="search-button">
                        <i class="fa fa-search"></i>
                    </button>
                </form>

            </div>
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font">{{$t('by_categories')}}</h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3" v-for="(item,k) in  getAllCategoriesMain" v-if="item.sub_categories">
                    <li class="mt-5">
                        <a href="" @click.prevent="selectCategory(item.id)">
                            <h5 class="size-xs font-weight-bold">
                                <i v-if="isSelectedCategory(item.id)" class="fa fa-circle"></i>
                                {{item.translated.title}}
                            </h5>
                        </a>
                    </li>
                    <li class="mb-3 ml-2 mr-2" v-for="(_item,k2) in  item.sub_categories">
                        <a href="" class="category"
                           @click.prevent="selectCategory(_item.id)">
                            <h5 class="size-xs font-weight-bold">
                                <i v-if="isSelectedCategory(_item.id)" class="fa fa-circle"></i>
                                {{_item.translated.title}}</h5>
                        </a>
                    </li>
                </ul>
            </div>
            <!--<div class="col-12 mb-5">-->
            <!--<h2 class="font-weight-bold fun_font">{{$t('by_price')}}</h2>-->
            <!--<div class="progress">-->
            <!--<div class="progress-bar bg-black" style="height: 2px;width:40%"></div>-->
            <!--</div>-->
            <!--<ul class="mt-4 ml-3">-->
            <!--<li class="zoom110">-->
            <!--<vue-slider @drag-end="dragEnd"-->
            <!--:min="0"-->
            <!--:max="7000"-->
            <!--v-model="value"/>-->
            <!--</li>-->
            <!--</ul>-->
            <!--<div class="text-black text-capitalize text-center font-weight-bold">price {{value[0]}} {{$t('kwd')}} - -->
            <!--{{value[1]}} {{$t('kwd')}}-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="col-12 mb-5" v-for="(option , index) in options" :key="index" :index="index">-->
            <!--<h2 class="font-weight-bold fun_font">{{option.translated.title}}</h2>-->
            <!--<div class="progress">-->
            <!--<div class="progress-bar bg-black" style="height: 2px;width:40%"></div>-->
            <!--</div>-->
            <!--<ul class="mt-4 ml-3" v-if="!option.type">-->
            <!--<li class="mb-3">-->
            <!--<div class="size-config">-->
            <!--<button class="btn btn-secondary text-uppercase btn-sm font-weight-bold border-1-gray m-1"-->
            <!--v-for="(option_value,index) in option.option_values"-->
            <!--@click="setSelectedOption(option.id,option_value.id)"-->
            <!--:class="getSelectedOption(option.id, option_value.id) ? 'bg-black text-white': 'bg-white'">-->
            <!--{{option_value.translated.title}}-->
            <!--</button>-->
            <!--</div>-->
            <!--</li>-->
            <!--</ul>-->
            <!--<ul class="mt-4 ml-3" v-if="option.type">-->
            <!--<li class="mb-3">-->

            <!--<div class="color-choose">-->
            <!--<div v-for="option_value in option.option_values">-->
            <!--<input @click="setSelectedOption(option.id,option_value.id)" type="radio"-->
            <!--:id="option_value.additional.code" name="color"-->
            <!--:value="option_value.additional.code"/>-->
            <!--<label :for="option_value.additional.code"-->
            <!--style="border-radius: 50%;padding: 0"-->
            <!--:style="getSelectedOption(option.id, option_value.id) ? {boxShadow:'1px 1px 10px #555'}: {}"><span-->
            <!--:style="{background: option_value.additional.code}"></span></label>-->
            <!--</div>-->
            <!--</div>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->


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
                query: '',
                value: [0, 4000],
                selectedCategory: [],
                options: [],
                selectedOptions: []
            }
        },
        mounted() {
            this.fetchOptions();
            let update_filter = false;
            let query = this.$route.query.query;
            if (query) {
                this.query = query;
                update_filter = true;
            }
            let category_id = this.$route.query.category_id;
            if (category_id) {

                if (Array.isArray(category_id)) {
                    category_id = JSON.parse(JSON.stringify(category_id))
                    _.forEach(category_id, (item) => {
                        this.selectedCategory.push(parseInt(item));
                    })
                    // this.selectedCategory = category_id
                    update_filter = true;
                } else {
                    this.selectedCategory.push(parseInt(category_id));
                    update_filter = true;
                }
            }
            if (update_filter) this.updateFilters(this.prepareFilters(false))
        },
        computed: {
            getAllCategories() {
                return this.$store.getters['moduleCommon/getAllCategories'];
            },
            getAllCategoriesMain() {
                return this.$store.getters['moduleCommon/getAllCategoriesMain']
            },
            getSelectedOptions() {
                return this.selectedOptions
            }
        },
        methods: {
            searchQuery() {
                let category_id = this.$route.query.category_id;
                let query = this.$route.query.query;
                this.$router.push({name: 'search', query: {query: this.query, category_id: category_id}})
                let filters = this.prepareFilters();
                this.updateFilters(filters)
            },
            dragEnd(index) {
                let filters = this.prepareFilters();
                this.updateFilters(filters)
            },
            setSelectedOption(option_id, option_value_id) {
                let found = false;
                _.forEach(this.selectedOptions, (selectedOption) => {
                    if (selectedOption.option_id == option_id) {
                        if (selectedOption.option_value_id == option_value_id) found = true;
                    }
                });

                if (!found) {
                    this.selectedOptions.push({
                        option_id: option_id,
                        option_value_id: option_value_id
                    });
                }
                this.updateFilters(this.prepareFilters())

            },
            getSelectedOption(option_id, option_value_id) {
                let found = false;
                _.forEach(this.selectedOptions, (selectedOption) => {
                    if (selectedOption.option_id == option_id) {
                        if (selectedOption.option_value_id == option_value_id) found = true;
                    }
                });
                return found;
            },
            fetchOptions() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchOptions', {
                    lang: vm.$i18n.locale
                });
                dispatch.then((response) => {
                    response = response.data;
                    vm.options = response.data.options
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
            prepareFilters(isMount = true) {
                // let values = _.map(this.selectedOptions, 'option_value_id')
                return {
                    category_ids: this.selectedCategory,
                    query: this.query,
                    isMount: isMount,
                    // min_price: this.value[0],
                    // max_price: this.value[1],
                    // option_value_ids: values
                }
            },
            selectCategory(id) {
                let selectedCategory = JSON.parse(JSON.stringify(this.selectedCategory));
                if (!selectedCategory.includes(id)) {
                    this.selectedCategory.push(id)
                } else {
                    let array = JSON.parse(JSON.stringify(this.selectedCategory))
                    const index = array.indexOf(id);
                    if (index > -1) {
                        array.splice(index, 1);
                    }
                    this.selectedCategory = array
                }
                let category_id = this.$route.query.category_id;
                let query = this.$route.query.query;
                this.$router.push({name: 'search', query: {query: this.query, category_id: this.selectedCategory}})
                // this.updateFilters(this.prepareFilters(false));
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

    .vue-slider-dot-tooltip-inner {
        background-color: #000000;
    }

    .vue-slider-dot-handle::after {

        background-color: #00000061;
    }
</style>