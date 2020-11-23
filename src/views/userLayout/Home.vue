<template>
    <div>
        <homeSlider id="slider_loader"/>
        <Header id="slider_content" style="display: none"/>
        <homeCategories id="sub_categories_loader"/>
        <MainContainer id="sub_categories_content" style="display: none"/>
        <div id="sections_loader">
            <homeCollectionMan/>
            <homeCollectionWoman/>
        </div>
        <div id="sections_content" style="display: none">
            <div v-for="(section , index) in sections" :key="index" :index="index">
                <div v-if="index%2 == 0">
                    <ManCollections :section="section"/>
                </div>
                <div v-if="index == 1">
                    <slot v-if="getSettings.home_vedio">
                        <div class="text-center mt-5" v-html="getSettings.home_vedio[0].value"></div>
                    </slot>
                </div>
                <div v-if="index%2 == 1">
                    <WomenCollections :section="section"/>
                </div>
            </div>
        </div>
        <div id="recent_products_loader">
        <homeProducts/>
        </div>
        <div id="recent_products_content" style="display: none">
        <newArrival/>
        </div>
        <GetInTouch/>
    </div>
</template>

<script>
    import Header from './components/Home/Header'
    import MainContainer from './components/Home/MainContainer'
    import ManCollections from './components/Home/ManCollections'
    import WomenCollections from './components/Home/WomenCollections'
    import newArrival from './components/Home/newArrival'
    import GetInTouch from './components/Home/GetInTouch'
    import homeSlider from './components/SkeletonLoaders/Extentions/homeSlider'
    import homeCategories from './components/SkeletonLoaders/Extentions/homeCategories'
    import homeCollectionMan from './components/SkeletonLoaders/Extentions/homeCollectionMan'
    import homeCollectionWoman from './components/SkeletonLoaders/Extentions/homeCollectionWoman'
    import homeProducts from './components/SkeletonLoaders/Extentions/homeProducts'

    export default {
        name: "Home",
        components: {
            Header, MainContainer, ManCollections, WomenCollections, newArrival, GetInTouch,
            homeSlider, homeCategories, homeCollectionMan, homeCollectionWoman, homeProducts
        },
        data() {
            return {
                sliders: [],
                sections: [],
            }
        },
        mounted() {
            this.getAllSliders();
            this.getHomePage();
            this.$nextTick(()=>{
                if(this.sliders.length) {
                    vm.$helper.hideLoader(['slider']);
                }
                if(this.sections.length) {
                    vm.$helper.hideLoader(['sections']);
                }
            })
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        methods: {
            getAllSliders() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleSlider/getAllSliders', {
                    lang: vm.$i18n.locale
                });
                dispatch.then((response) => {
                    response = response.data;
                    let sliders = this.$store.getters['moduleSlider/getAllSliders'];
                    vm.sliders = sliders;
                    vm.$helper.hideLoader(['slider']);
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader(['slider']);
                });
            },
            getHomePage() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchHomePage', {
                    lang: vm.$i18n.locale
                });
                dispatch.then((response) => {
                    response = response.data;
                    let sections = this.$store.getters['moduleCommon/getAllSections'];
                    vm.sections = sections;
                    vm.$helper.hideLoader(['sections']);
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader(['sections']);
                });
            },
        }
    }
</script>

<style scoped>

</style>