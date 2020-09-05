<template>
    <div class="pt-5" v-if="getDescription">
        <div class="container">
            <div class="row direction text-left">
                <div class="col-md-2 text-black font-weight-bold">
                    <div class="bg-black text-white p-3 font-weight-bold size-sm mb-3">
                        Description
                    </div>
                </div>
                <div class="col-md-12 text-black font-weight-bold">
                    <div v-html="getDescription"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ItemDescription",
        props: ['productDescription'],
        data() {
            return {}
        },
        mounted() {
        },
        computed: {
            getDescription() {
                return this.productDescription.description;
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>