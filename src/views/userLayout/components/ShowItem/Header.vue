<template>
    <div class="pt-5" v-if="getCategory">
        <!--<div class="container">-->
            <!--<div class="row">-->
                <!--<div class="col-md-12">-->
                    <!--<ol class="breadcrumb bg-transparent shadow-0 direction">-->
                        <!--<li class="breadcrumb-item font-weight-bold fun_font size-sm"><a class="text-black" href="#">{{$t('shop')}}</a>-->
                        <!--</li>-->
                        <!--<li class="breadcrumb-item active font-weight-bold fun_font fun_font size-sm"-->
                            <!--aria-current="page"> {{getCategory.translated.title}}-->
                        <!--</li>-->
                    <!--</ol>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['category'],
        data() {
            return {}
        },
        mounted() {
        },
        computed: {
            getCategory() {
                return this.category
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>