<template>
    <div v-if="branch">
        <div class="container mt-5">
            <div class="row justify-content-center direction">
                <div class="col-md-12" style="min-height: 80vh">
                    <h1 class="fun_font size-lg mb-5">{{$t('privacy')}}</h1>
                    <div v-html="branch.translated.privacy">

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
                isLoading: false,
                branch: null,
            }
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        mounted() {
            this.getBranchInfo();
        },
        methods: {
            getBranchInfo() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchBranchSetting', {});
                dispatch.then((response) => {
                    let status = response.data.status;
                    let data = response.data.data;
                    if (status) {
                        vm.branch = data.branch;
                    }
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.hideLoader();
                    vm.$helper.handleError(error, vm);
                });
            }
        }
    }
</script>

<style scoped>

</style>