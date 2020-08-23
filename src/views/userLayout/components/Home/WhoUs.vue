<template>
    <div style="background: #eee">
        <div class="container" v-if="getSetting">
            <div class="row direction text-left pt-5 pb-5">
                <div class="col-md-8 pt-5">
                    <h3 class="pb-1"> {{$t('who_us')}}</h3>
                    <div class="pt-4" v-if="getSetting.about_us">
                        <p v-html="getSetting.about_us[0].value"></p>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="require('@/assets/img/who_us.png')" class="w-100" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "WhoUs",
        data() {
            return {};
        },
        computed: {
            getSetting() {
                let settings = this.$store.getters['moduleCommon/getAllSettings'];
                return _.groupBy(settings, 'name');
            }
        },
        methods: {},
    }
</script>

<style scoped>

</style>