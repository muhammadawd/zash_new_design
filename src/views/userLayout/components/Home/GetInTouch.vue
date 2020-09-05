<template>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 text-left">
                    <div class="card">
                        <div class="card-body mb-5">
                            <h1 class="collection_title fun_font">{{$t('get_in_touch')}}</h1>
                            <p>{{$t('subscribe_p')}}</p>
                            <form class="sup-form direction " @submit.prevent="saveSubscribe()">
                                <input type="text" :placeholder="$t('email_here')" class="form-control border"
                                       v-model="email">
                                <input type="submit" class="btn btn-theme bg-black text-white" :disabled="isLoading"
                                       :class="isLoading ? 'disabled' : ''"
                                       :value="$t('subscribe')">
                            </form>
                            <span class="text-danger" id="subscribe_email"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "GetInTouch",
        components: {},
        data() {
            return {
                isLoading: false,
                email: null,
            }
        },
        mounted() {
        },
        methods: {
            saveSubscribe() {
                let vm = this;
                vm.isLoading = true;
                let dispatch = this.$store.dispatch('moduleCommon/saveSubscribe', {
                    lang: vm.$i18n.locale,
                    email: vm.email
                });
                dispatch.then((response) => {
                    let status = response.data.status;
                    let data = response.data.data;
                    vm.isLoading = false;
                    if (!status) {
                        $('#subscribe_email').text(data.validation_errors.email[0])
                        return
                    }
                    vm.$helper.showMessage('success', vm)
                    $('#subscribe_email').text('')
                    vm.email = null;
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.isLoading = false
                });
            }
        }
    }
</script>

<style>
</style>