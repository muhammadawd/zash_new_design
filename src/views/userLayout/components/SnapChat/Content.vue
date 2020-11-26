<template>
    <div v-if="getSettings">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 mt-5 mb-5 text-center" v-if="getSettings.snap_image && getSettings.snap_image[0].path">
                    <img :src="getSettings.snap_image[0].path.path" class="m-auto w-75" alt="">
                </div>
                <div class="col-md-8 text-center" v-if="$i18n.locale == 'ar'">
                    <h2 class="font-weight-bold" v-if="getSettings.snap_title_ar && getSettings.snap_title_ar[0].value">
                        {{getSettings.snap_title_ar[0].value}}
                    </h2>
                    <p class="lead mt-2 mb-4" v-if="getSettings.snap_desc_ar && getSettings.snap_desc_ar[0].value">
                        {{getSettings.snap_desc_ar[0].value}}
                    </p>
                </div>
                <div class="col-md-8 text-center" v-if="$i18n.locale == 'en'">
                    <h2 class="font-weight-bold" v-if="getSettings.snap_title_en && getSettings.snap_title_en[0].value">
                        {{getSettings.snap_title_en[0].value}}
                    </h2>
                    <p class="lead mt-2 mb-4" v-if="getSettings.snap_desc_en && getSettings.snap_desc_en[0].value">
                        {{getSettings.snap_desc_en[0].value}}
                    </p>
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
            return {}
        },
        mounted() {
            if (this.getSettings && this.getSettings.snap_image) {
                this.$helper.hideLoader(['snapchat'])
            }
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
