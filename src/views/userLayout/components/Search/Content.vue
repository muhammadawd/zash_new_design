<template>
    <div>
        <searchView id="search_top_loader"/>
        <div class="card" id="search_top_content" style="display: none">
            <div class="card-body">
                <div class="container">
                    <div class="row direction">
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <h3 class="text-right size-xs pt-2" dir="ltr">{{$t('showing')}} {{products.length}} of
                                {{total}}
                                {{$t('results')}}</h3>
                        </div>
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <button class="btn bg-filter text-white bt-sm border-0  float-left d-md-none"
                                    @click="toggleFilterMenu()">
                                <i class="ti-filter fa-lg"></i>
                            </button>
                            <ul class="grid_list">
                                <li class="list-inline-item  p-2">
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
            <div class="row direction">
                <div class="col-md-3">
                    <searchFilter id="search_filter_loader"/>
                    <Filters id="search_filter_content" style="display: none" v-bind:updateFilters="updateFilters"/>
                </div>
                <div class="col-md-9">
                    <searchProducts id="search_product_loader"/>
                    <div id="search_product_content" style="display: none">
                        <div class="row" v-if="layout === 'list'">
                            <div class="col-md-12" v-for="(product,indx) in products" :key="indx" :index="indx">
                                <div class="pointer p-2"
                                     @click="$router.push({name:'show_item',params:{slug:product.slug}})">
                                    <img :src="product.main_image ? product.main_image:  require('@/assets/img/noimage.png')"
                                         class="w-25 bg-white d-inline-block radius10" alt="">
                                    <div class="w-75 p-3 d-inline-block mb-5">
                                        <h4 class="font-weight-bold text-black">{{product.translated.title}}</h4>
                                        <!--<h5 class="font-weight-bold text-black" v-if="product.minimum_price">-->
                                        <!--{{product.minimum_price}} {{$t('kwd')}}</h5>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="layout === 'grid'">
                            <div class="col-md-4" v-for="(product,indx) in products" :key="indx" :index="indx">
                                <div class="collection_slide pointer p-2"
                                     @click="$router.push({name:'show_item',params:{slug:product.slug}})">
                                    <img :src="product.main_image" class="w-100 radius10" alt="">
                                    <!--<img v-if="product.main_image"-->
                                    <!--:src="product.main_image_new.storage_path + '/300'+product.main_image_new.name"-->
                                    <!--class="w-100 bg-white" alt="">-->
                                    <img v-if="!product.main_image"
                                         :src="require('@/assets/img/noimage.png')"
                                         class="w-100 bg-white radius10" alt="">
                                    <div class="p-1">
                                        <div class="font-weight-bold text-black">{{product.translated.title}}</div>
                                        <!--<h4 class="font-weight-bold text-black" v-if="product.minimum_price">-->
                                        <!--{{product.minimum_price}} {{$t('kwd')}}</h4>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <infinite-loading ref="infiniteLoading" @distance="1" @infinite="search">
                            <div slot="spinner">
                                <searchProducts/>
                            </div>
                            <div slot="no-results">
                                <div class="text-center mt-5">
                                    <h3>{{$t('didntfind')}}</h3>
                                    <p>{{$t('didntfindp')}}</p>
                                </div>
                            </div>
                        </infinite-loading>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters'
    import InfiniteLoading from 'vue-infinite-loading';
    import searchView from '../SkeletonLoaders/Extentions/searchView'
    import searchFilter from '../SkeletonLoaders/Extentions/searchFilter'
    import searchProducts from '../SkeletonLoaders/Extentions/searchProducts'

    export default {
        name: "Content",
        components: {
            Filters,
            InfiniteLoading,
            searchView,
            searchFilter,
            searchProducts,
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
            setTimeout(() => {
                this.$helper.hideLoader(['search_top'])
            }, 3000)
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
                this.$refs.infiniteLoading.stateChanger.reset()
                if (vm.filters.isMount) {
                    this.search(null);
                }
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
                    vm.$helper.hideLoader(['search_product']);
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader(['search_product']);
                });
            },
        }
    }
</script>

<style scoped>

</style>