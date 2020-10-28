<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center direction" style="min-height: 80vh">
                <div class="col-md-6">
                    <h1 class="fun_font size-lg mb-5">{{$t('career')}}</h1>

                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" v-model="dataModel.name"
                               :placeholder="$t('your_name')">
                        <span class="text-danger error" id="name_error"></span>
                    </div>
                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" v-model="dataModel.phone"
                               :placeholder="$t('your_phone')+'*'">
                        <span class="text-danger error" id="phone_error"></span>
                    </div>
                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" v-model="dataModel.email"
                               :placeholder="$t('your_email')">
                        <span class="text-danger error" id="email_error"></span>
                    </div>

                    <div class="form-group mb-4">
                        <input type="file" class="form-control font-weight-bold" ref="file"
                               v-on:change="handleFileUpload()"
                               :placeholder="$t('your_cv')">
                        <span class=" "> {{$t('your_cv')}}</span>
                        <span class="text-danger error" id="file_error"></span>
                    </div>

                    <div class="form-group mb-4">
                        <button class="btn btn-secondary bg-black text-white float-right" @click="saveCareer()"
                                :disabled="isLoading"
                                :class="isLoading ? 'disabled' : ''">
                            {{$t('send')}}
                        </button>
                        <div class="clearfix"></div>
                    </div>

                </div>
                <div class="col-md-1"></div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="fun_font size-lg mb-5">{{$t('get_info')}}</h1>
                            <div class="p-4">
                                <ul class="text-black mb-5">
                                    <li>
                                        <i class="ti-map-alt fa-lg pr-4"></i>
                                        <b class="font-weight-bold">{{$t('address')}}</b>
                                    </li>
                                    <li class="mt-2">
                                        <div class="pr-5 pl-5 text-dark">
                                            <small v-if="getSettings.address_en">
                                                {{getSettings.address_en[0].value}}
                                            </small>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="text-black direction mb-5">
                                    <li>
                                        <i class="ti-map-alt fa-lg pr-4"></i>
                                        <b class="font-weight-bold">{{$t('address')}}</b>
                                    </li>
                                    <li class="mt-2">
                                        <div class="pr-5 pl-5 text-dark">
                                            <small v-if="getSettings.address_ar">
                                                {{getSettings.address_ar[0].value}}
                                            </small>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="text-black d-none mb-5">
                                    <li>
                                        <i class="ti-map-alt fa-lg pr-4"></i>
                                        <b class="font-weight-bold">Payna Headquarter</b>
                                    </li>
                                    <li class="mt-2">
                                        <div class="pr-5 pl-5 text-dark">
                                            <small>
                                                8131 Budd Rd Terre Haute, IN 47805
                                            </small>
                                        </div>
                                    </li>
                                </ul>
                                <hr>
                                <ul class="text-dark direction mb-5" v-if="getSettings">
                                    <li class="mt-4" v-if="getSettings.front_email">
                                        <i class="ti-email fa-lg pr-4 float-left"></i>
                                        <span class="font-weight-bold">{{getSettings.front_email[0].value}}</span>
                                    </li>
                                    <li class="mt-4" v-if="getSettings.phone1">
                                        <i class="ti-mobile fa-lg pr-4  float-left"></i>
                                        <span class="font-weight-bold">{{getSettings.phone1[0].value}}</span>
                                    </li>
                                    <li class="mt-4" v-if="getSettings.phone2">
                                        <i class="ti-mobile fa-lg pr-4  float-left"></i>
                                        <span class="font-weight-bold">{{getSettings.phone2[0].value}}</span>
                                    </li>
                                </ul>
                                <div class="text-center">
                                    <ul class="mt-4">
                                        <li class="list-inline-item animationIcon p-2" v-if="getSettings.facebook">
                                            <a class="text-black" :href="getSettings.facebook[0].value">
                                                <i class="fab fa-facebook  fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2" v-if="getSettings.twitter">
                                            <a class="text-black" :href="getSettings.twitter[0].value">
                                                <i class="fab fa-twitter fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2" v-if="getSettings.instagram">
                                            <a class="text-black" :href="getSettings.instagram[0].value">
                                                <i class="fab fa-instagram  fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2" v-if="getSettings.youtube">
                                            <a class="text-black" :href="getSettings.youtube[0].value">
                                                <i class="fab fa-youtube fa-2x"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
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
                isLoading: false,
                dataModel: {
                    name: '',
                    email: '',
                    phone: ''
                },
            }
        },
        mounted() {
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            }
        },
        methods: {
            showVaildationMassges(errors, tag) {
                $(`#name${tag},#email${tag},#phone${tag},#file${tag}`).text('');
                $.each(errors, function (key, error) {
                    $('#' + key + tag).text(error[0])
                })
            },
            handleFileUpload() {
                let vm = this;
                vm.dataModel.file = vm.$refs.file.files[0];
            },
            saveCareer() {
                let vm = this;
                vm.isLoading = true;
                let request_data = vm.dataModel;
                request_data.lang = vm.$i18n.locale;
                let form_data = new FormData();
                _.forEach(request_data, (item, k) => {
                    form_data.append(k, item)
                })
                let dispatch = this.$store.dispatch('moduleCommon/saveCareer', form_data);
                dispatch.then((response) => {
                    let status = response.data.status;
                    let data = response.data.data;
                    vm.isLoading = false;
                    if (!status) {
                        vm.showVaildationMassges(data.validation_errors, '_error');
                        return
                    }
                    vm.$helper.showMessage('success', vm);
                    $('.error').text('');
                    vm.name = null;
                    vm.phone = null;
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.isLoading = false
                });
            }
        }
    }
</script>

<style scoped>

</style>