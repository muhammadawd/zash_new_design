<template>
    <div>
        <div class="container" v-if="getSetting">
            <div class="row direction justify-content-center mt-5">
                <div class="col-md-8  text-left">
                    <div class="pt-3" v-if="getSetting.terms">
                        <p v-html="getSetting.terms[0].value"></p>
                    </div>
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