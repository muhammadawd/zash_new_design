<template>
    <div id="footer" class="mt-4">
        <!--<div class="container mt-5 mb-5">-->
        <!--<div class="row">-->
        <!--<div class="col-md-4">-->
        <!--</div>-->
        <!--<div class="col-md-2 text-center text-md-left mb-3 col-6">-->
        <!--<ul class="text-black  d-none font-weight-bold">-->
        <!--<li class="mb-1">-->
        <!--<a href="">Help</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Returns</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Gift voucher</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Affiliate</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Work for Zash</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--<div class="col-md-2 text-center text-md-left mb-3 col-6">-->
        <!--<ul class="text-black d-none font-weight-bold">-->
        <!--<li class="mb-1">-->
        <!--<a href="">Help</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Returns</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Gift voucher</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Affiliate</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<a href="">Work for Zash</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--<div class="col-md-2 mb-3 text-center">-->
        <!--&lt;!&ndash;<img v-if="getSettings.logo"&ndash;&gt;-->
        <!--&lt;!&ndash;:src="getSettings.logo[0] ? getSettings.logo[0].path.path : require('@/assets/logo.png')"&ndash;&gt;-->
        <!--&lt;!&ndash;class="w-75 mb-3" alt=""/>&ndash;&gt;-->
        <!--<img :src=" require('@/assets/logo-footer.png')"-->
        <!--class="w-100 mb-3" alt=""/>-->
        <!--</div>-->
        <!--<div class="col-md-2 text-center text-md-left mb-3">-->
        <!--<ul class="text-black font-weight-bold">-->
        <!--<li class="mb-1" v-if="getSettings.front_email">-->
        <!--<a :href="'mailto:'+getSettings.front_email[0].value">-->
        <!--{{getSettings.front_email[0].value}}-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="mb-1" v-if="getSettings.phone1">-->
        <!--<a :href="'tel:'+getSettings.phone1[0].value">-->
        <!--{{getSettings.phone1[0].value}}-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="mb-1" v-if="getSettings.phone2">-->
        <!--<a :href="'tel:'+getSettings.phone2[0].value">-->
        <!--{{getSettings.phone2[0].value}}-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="mb-1" v-if="getSettings.address_en">-->
        <!--<a href="#">-->
        <!--{{getSettings.address_en[0].value}}-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="mb-1">-->
        <!--<ul class="mt-4">-->
        <!--<li class="list-inline-item animationIcon p-1" v-if="getSettings.facebook">-->
        <!--<a class="text-black" :href="getSettings.facebook[0].value">-->
        <!--<i class="fab fa-facebook fa-lg"></i>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="list-inline-item animationIcon p-1" v-if="getSettings.twitter">-->
        <!--<a class="text-black" :href="getSettings.twitter[0].value">-->
        <!--<i class="fab fa-twitter fa-lg"></i>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="list-inline-item animationIcon p-1" v-if="getSettings.instagram">-->
        <!--<a class="text-black" :href="getSettings.instagram[0].value">-->
        <!--<i class="fab fa-instagram fa-lg"></i>-->
        <!--</a>-->
        <!--</li>-->
        <!--<li class="list-inline-item animationIcon p-1" v-if="getSettings.youtube">-->
        <!--<a class="text-black" :href="getSettings.youtube[0].value">-->
        <!--<i class="fab fa-youtube fa-lg"></i>-->
        <!--</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->

        <!-- ============================ Footer Start ================================== -->
        <!--light-footer-->
        <footer class="bg-black p-md-5 ">
            <div class="container-fluid">
                <div class="row direction d-flex justify-content-center align-items-center">
                    <div class="col-md-2 col-6 text-center">
                        <img :src="getSettings.logo ? getSettings.logo[0].path.path : require('@/assets/logo.png')"
                             class="w-50 mb-3" alt=""/>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-4">
                        <ul class="text-center d-flex flex-wrap  mb-4 mt-4  md-md-0 mt-md-0 justify-content-between">
                            <li class="list-inline-item mr-3 ml-3">
                                <a href="" @click.prevent="$router.push({name:'home'})"
                                   class="size-xs text-white font-weight-bold">{{$t('home')}}</a>
                            </li>
                            <li class="list-inline-item mr-3 ml-3">
                                <a href="" @click.prevent="$router.push({name:'about_us'})"
                                   class="size-xs text-white font-weight-bold">{{$t('about_us')}}</a>
                            </li>
                            <li class="list-inline-item mr-3 ml-3">
                                <a href="" @click.prevent="$router.push({name:'contact_us'})"
                                   class="size-xs text-white font-weight-bold">{{$t('contact_us')}}</a>
                            </li>
                            <li class="list-inline-item mr-3 ml-3">
                                <a href="" @click.prevent="$router.push({name:'career'})"
                                   class="size-xs text-white font-weight-bold">{{$t('career')}}</a>
                            </li>
                            <li class="list-inline-item mr-3 ml-3">
                                <a href="" @click.prevent="$router.push({name:'privacy'})"
                                   class="size-xs text-white font-weight-bold">{{$t('privacy')}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-2 text-center">
                        <ul class="mt-0 mb-4">
                            <li class="list-inline-item animationIcon pr-1 pl-1" v-if="getSettings.facebook">
                                <a class="text-black" :href="getSettings.facebook[0].value">
                                    <i class="fab fa-facebook-square text-white fa-lg"></i>
                                </a>
                            </li>
                            <li class="list-inline-item animationIcon pr-1 pl-1" v-if="getSettings.twitter">
                                <a class="text-black" :href="getSettings.twitter[0].value">
                                    <i class="fab fa-twitter-square text-white fa-lg"></i>
                                </a>
                            </li>
                            <li class="list-inline-item animationIcon pr-1 pl-1" v-if="getSettings.instagram">
                                <a class="text-black" :href="getSettings.instagram[0].value">
                                    <i class="fab fa-instagram text-white fa-lg"></i>
                                </a>
                            </li>
                            <li class="list-inline-item animationIcon pr-1 pl-1" v-if="getSettings.snapchat">
                                <a class="text-black" :href="getSettings.snapchat[0].value">
                                    <i class="fab fa-snapchat text-white fa-lg"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-2 text-center">
                        <ul class="text-white text-center text-md-left  mb-4 mt-4  md-md-0 mt-md-0 font-weight-bold d-none d-md-block">
                            <li class="mb-1" v-if="getSettings.front_email">
                                <a class="text-white" :href="'mailto:'+getSettings.front_email[0].value">
                                    {{getSettings.front_email[0].value}}
                                </a>
                            </li>
                            <li class="mb-1" v-if="getSettings.phone1" dir="ltr">
                                <a class="text-white" :href="'tel:'+getSettings.phone1[0].value">
                                    {{getSettings.phone1[0].value}}
                                </a>
                            </li>
                            <li class="mb-1" v-if="getSettings.phone2" dir="ltr">
                                <a class="text-white" :href="'tel:'+getSettings.phone2[0].value">
                                    {{getSettings.phone2[0].value}}
                                </a>
                            </li>
                            <li class="mb-1" v-if="getSettings.address_en">
                                <a class="text-white size-15" href="#">
                                    {{getSettings.address_en[0].value}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!--<div>-->
            <!--<div class="container">-->
            <!--<div class="row direction">-->
            <!--<div class="text-center col-md-12">-->
            <!--<div class="footer-widget">-->

            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--<div class="footer-bottom">-->
            <!--<div class="container">-->
            <!--<div class="row align-items-center direction">-->


            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
        </footer>
        <!-- ============================ Footer End ================================== -->
    </div>
</template>

<script>
    export default {
        name: "TheFooter",
        data() {
            return {}
        },
        mounted() {
            this.getHomeData();
            this.getAllCategoriesMain();
            this.getAllCategoriesSub();
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        methods: {
            getHomeData() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchHomeData', {
                    lang: vm.$i18n.locale
                });
                dispatch.then((response) => {
                    // response = response.data;
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
            getAllCategoriesMain() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchCategoriesMain', {
                    lang: vm.$i18n.locale,
                    main: 1
                });
                dispatch.then((response) => {
                    // response = response.data;
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
            getAllCategoriesSub() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchCategoriesSub', {
                    lang: vm.$i18n.locale,
                    sub: 1
                });
                dispatch.then((response) => {
                    // response = response.data;
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