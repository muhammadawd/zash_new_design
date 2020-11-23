<template>
    <div>
        <div id="itemProduct_loader">
            <itemSkeleton/>
        </div>
        <div id="itemProduct_content" style="display: none">
            <div v-if="product">
                <Header :category="product.category"/>
                <MainContainer :product="product" :previous="previous" :next="next"/>
                <ItemDescription :productDescription="product.translated"/>
                <RecommendedItems :relatedProducts="relatedProducts"/>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from './components/ShowItem/Header'
    import RecommendedItems from './components/ShowItem/RecommendedItems'
    import ItemDescription from './components/ShowItem/ItemDescription'
    import MainContainer from './components/ShowItem/MainContainer'
    import itemSkeleton from './components/SkeletonLoaders/itemSkeleton'

    export default {
        name: "ShowItem",
        components: {
            Header, RecommendedItems, MainContainer, ItemDescription,
            itemSkeleton
        },
        mounted() {
            this.findProduct()
        },
        watch: {
            '$route'() {
                location.reload()
            }
        },
        data() {
            return {
                next: null,
                previous: null,
                product: null,
                relatedProducts: [],
            }
        },
        computed: {},
        methods: {
            findProduct() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchGetProductBySlug', {
                    lang: vm.$i18n.locale,
                    // product_id: vm.$route.params.id,
                    // branch_id: vm.$route.params.branch_id,
                    slug: vm.$route.params.slug,
                });
                dispatch.then((response) => {
                    response = response.data;
                    vm.product = response.data.product;
                    vm.next = response.data.next;
                    vm.previous = response.data.previous;
                    vm.relatedProducts = response.data.related_products;
                    vm.$helper.hideLoader(['itemProduct']);
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader(['itemProduct']);
                });
            },
        }
    }
</script>

<style scoped>

</style>