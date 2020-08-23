<template>
    <div>
        <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
        <!-- Start Navigation -->
        <div class="header header-light head-shadow">
            <div class="container">
                <nav id="navigation" class="navigation navigation-landscape">
                    <div class="nav-header">
                        <a class="nav-brand" href="" @click.prevent="$router.push({name:'home'})">
                            <img :src="require('@/assets/logo.png')" class="logo" alt=""/>
                        </a>
                        <div class="nav-toggle"></div>
                    </div>
                    <div class="nav-menus-wrapper" style="transition-property: none;">
                        <ul class="nav-menu float-left direction">

                            <li :class="$route.name == 'home' ? 'active' : ''"><a href=""
                                                                                  @click.prevent="$router.push({name:'home'})">{{$t('home')}}</a>
                            </li>


                            <li class="d-md-none"><a style="" v-if="locale != 'ar'" @click="updateLocale('ar')">{{$t('ar')}}</a>
                            </li>

                            <li class="d-md-none"><a style="" v-if="locale != 'en'" @click="updateLocale('en')">{{$t('en')}}</a>
                            </li>
                            <!--<li><a href="">{{$t('contact')}}</a></li>-->
                        </ul>

                        <ul class="nav-menu nav-menu-social float-right direction">
                            <li class="green light d-none d-md-flex text-capitalize" v-if="locale != 'ar'">
                                <a style="" @click="updateLocale('ar')">{{$t('ar')}}</a>
                            </li>
                            <li class="green light d-none d-md-flex text-capitalize" v-if="locale != 'en'">
                                <a class="" @click="updateLocale('en')">{{$t('en')}}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!-- End Navigation -->
        <div class="clearfix"></div>
        <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
    </div>
</template>

<script>
    export default {
        name: "TheNavBar",
        mounted() {
            this.locale = this.$i18n.locale
            this.auth = this.$helper.getLocalStorage('userInfo');
        },
        data() {
            return {
                locale: 'ar',
                auth: null,
            }
        },
        watch: {
            '$route'(to, from) {
                this.auth = this.$helper.getLocalStorage('userInfo');
                setTimeout(() => {
                    this.navigationBarFunctionality();
                }, 500)

            }
        },
        computed: {},
        methods: {
            updateLocale(locale) {
                document.documentElement.setAttribute('lang', locale);
                this.$helper.setLocalStorage('language', locale);
                location.reload();
            },
            prepareFilters() {
                return {
                    lang: this.$i18n.locale
                };
            },
            logout() {
                this.$helper.removeLocalStorage('userInfo');
                this.$helper.removeLocalStorage('token');
                location.reload()
            }
        }
    }
</script>

<style scoped>

</style>