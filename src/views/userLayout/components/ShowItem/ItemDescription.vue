<template>
    <div class="pt-5">
        <div class="container" v-if="getDescription">
            <div class="row direction text-left">
                <div class="col-md-2 text-black font-weight-bold">
                    <div class="bg-black text-white p-3 font-weight-bold size-sm mb-3">
                        Description
                    </div>
                </div>
                <div class="col-md-12"></div>
                <div class="col-md-8 text-black font-weight-bold">
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
        methods: {
            // handleScroll: function (el) {
            //     if ((el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight) {
            //         // this.hasScrolledToBottom = true;
            //         console.log(true)
            //     } else {
            //         console.log(false)
            //     }
            // }
        }
    }
</script>

<style scoped>

</style>