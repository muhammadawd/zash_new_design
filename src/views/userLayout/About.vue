<template>
    <div>
        <div class="container" v-if="getSetting">
            <div class="row direction mt-5">
                <div class="col-md-8  text-left">
                    <h2 class="fun_font">
                        {{$t('about_nariman')}}
                    </h2>
                    <div class="pt-3" v-if="getSetting.about_nariman">
                        <p v-html="getSetting.about_nariman[0].value"></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="require('@/assets/img/about.png')" class="w-100" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "About",
        components: {},
        mounted() {

        },
        computed: {
            getSetting() {
                let settings = this.$store.getters['moduleCommon/getAllSettings'];
                return _.groupBy(settings, 'name');
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>