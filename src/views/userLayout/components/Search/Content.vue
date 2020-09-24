<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <h3 class="text-right size-xs pt-2">{{$t('showing')}} {{products.length}} of {{total}}
                                {{$t('results')}}</h3>
                        </div>
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <button class="btn bg-filter text-white bt-sm border-0  float-left d-md-none"
                                    @click="toggleFilterMenu()">
                                <i class="ti-filter fa-lg"></i>
                            </button>
                            <ul class="grid_list">
                                <li class="list-inline-item p-2">
                                    <a :class="layout  == 'list' ? 'active' : ''" href=""
                                       @click.prevent="layout = 'list'">
                                        <i class="ti-list fa-2x"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item p-2">
                                    <a :class="layout  == 'grid' ? 'active' : ''" href=""
                                       @click.prevent="layout = 'grid'">
                                        <i class="ti-layout-grid2 fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <Filters v-bind:updateFilters="updateFilters"/>
                </div>
                <div class="col-md-9">
                    <div class="row" v-if="layout === 'list'">
                        <div class="col-md-12" v-for="(product,indx) in products" :key="indx" :index="indx">
                            <div class="pointer p-2"
                                 @click="$router.push({name:'show_item',params:{id:product.id,branch_id :product.branch_id}})">
                                <img :src="product.main_image" class="w-25 bg-white d-inline-block" alt="">
                                <div class="w-75 p-3 d-inline-block mb-5">
                                    <h4 class="font-weight-bold text-black">{{product.translated.title}}</h4>
                                    <h5 class="font-weight-bold text-black">{{product.minimum_price}} {{$t('kwd')}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="layout === 'grid'">
                        <div class="col-md-4" v-for="(product,indx) in products" :key="indx" :index="indx">
                            <div class="collection_slide pointer p-2"
                                 @click="$router.push({name:'show_item',params:{id:product.id,branch_id :product.branch_id}})">
                                <img :src="product.main_image" class="w-100" alt="">
                                <div class="p-1">
                                    <div class="font-weight-bold text-black">{{product.translated.title}}</div>
                                    <h4 class="font-weight-bold text-black">{{product.minimum_price}} {{$t('kwd')}}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-5 text-center">
                    <infinite-loading :distance="400" @infinite="search"></infinite-loading>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters'
    import InfiniteLoading from 'vue-infinite-loading';

    export default {
        name: "Content",
        components: {
            Filters,
            InfiniteLoading,
        },
        data() {
            return {
                layout: 'grid',
                products: [],
                page: 1,
                total: 0,
                filters: {}
            }
        },
        mounted() {
            if (this.$helper.isMobile()) {
                this.toggleFilterMenu()
            }
            // this.search()
        },
        computed: {},
        methods: {
            toggleFilterMenu() {
                $('#filterMenu').slideToggle();
            },
            updateFilters(filters) {
                let vm = this;
                vm.products = [];
                vm.page = 1;
                vm.filters = filters;
                this.search(null);
            },
            search($state) {
                let vm = this;
                // vm.$helper.showLoader();
                let filters = vm.filters;
                filters.lang = vm.$i18n.locale;
                filters.page = vm.page;
                filters.limit = 15;
                let dispatch = this.$store.dispatch('moduleCommon/fetchFullSearch', filters);
                dispatch.then((response) => {
                    if (!$state) vm.products = [];
                    let status = response.data.status;
                    let data = response.data.data;
                    if (data.products.data.length) {
                        vm.page += 1;
                        vm.products.push(...data.products.data);
                        vm.total = data.products.total;
                        if ($state) $state.loaded();
                    } else {
                        if ($state) $state.complete();
                    }
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
        }
    }
</script>

<style scoped>

</style>