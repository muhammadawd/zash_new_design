<template>
    <div>
        <div class="mt-5" v-for="(about , key) in abouts" :key="key" :index="key">
            <div class="container mt-5" v-if="key%2 == 0">
                <div class="row">
                    <div class="col-md-6 text-black text-left">
                        <h1 class="fun_font size-lg mb-4">{{about.translated.title}}</h1>
                        <p>
                            {{about.translated.description}}
                        </p>
                    </div>
                    <div class="col-md-6 text-md-right text-center">
                        <img :src="about.image" class="w-75 mb-3" alt="">
                    </div>
                </div>
            </div>
            <div class="container mt-5" v-if="key%2 != 0">
                <div class="row">
                    <div class="container mt-5">
                        <div class="row">
                            <div class="col-md-6 d-none  d-md-flex text-md-left text-center">
                                <img :src="about.image" class="w-75 mb-3" alt="">
                            </div>
                            <div class="col-md-6 text-black text-left">
                                <h1 class="fun_font size-lg mb-4">{{about.translated.title}}</h1>
                                <p>
                                    {{about.translated.description}}
                                </p>
                            </div>
                            <div class="col-md-6 d-md-none text-md-left text-center">
                                <img :src="about.image" class="w-75 mb-3" alt="">
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        components: {},
        data() {
            return {
                abouts: []
            }
        },
        mounted() {
            this.getAboutus();
        },
        methods: {
            getAboutus() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchAbout', {
                    lang: vm.$i18n.locale
                });
                dispatch.then((response) => {
                    let status = response.data.status;
                    let data = response.data.data;
                    vm.abouts = data.abouts;
                    vm.$helper.hideLoader(['about']);
                }).catch((error) => {
                    vm.$helper.hideLoader(['about']);
                    vm.$helper.handleError(error, vm);
                });
            }
        }
    }
</script>

<style scoped>

</style>
