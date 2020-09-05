<template>
    <div>
        <Header/>
        <MainContainer/>
        <div v-for="(section , index) in sections" :key="index" :index="index">
            <div v-if="index%2 == 0">
                <ManCollections :section="section"/>
            </div>
            <div v-if="index%2 == 1">
                <WomenCollections :section="section"/>
            </div>
        </div>
        <newArrival/>
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

    export default {
        name: "Home",
        components: {
            Header, MainContainer, ManCollections, WomenCollections, newArrival, GetInTouch
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
        },
        computed: {},
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
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
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