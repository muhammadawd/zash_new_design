<template>
    <div v-if="settings">
        <div class="row mt-5">
            <div class="col-md-12">
                <div class="dashboard_container">
                    <div class="row">
                        <div class="col-12 pt-3">
                            <h2 class="font-weight-bold fun_font text-center">{{$t('main_settings')}}</h2>
                        </div>
                    </div>
                    <div class="dashboard_container_body p-2">

                        <div class="row">

                            <div v-for="(setting , index) in settings" :key="index"
                                 :class="setting.type == 'editor' ? 'col-md-6' : 'col-md-4'">
                                <div class="form-group">
                                    <label class="font-weight-bold">{{setting.title_ar}}</label>
                                    <input type="text" v-if="setting.type == 'text'"
                                           v-model="dataModel[setting.name] = setting.value"
                                           class="form-control"
                                           :placeholder="setting.title_ar">
                                </div>
                                <vue-editor v-if="setting.type == 'editor'" class="direction-inverse mb-3"
                                            style="max-height: 300px;overflow: scroll"
                                            v-model="dataModel[setting.name] = setting.value"></vue-editor>
                                <span class="text-danger text-sm">{{ errors.first('title_ar') }}</span>
                            </div>

                            <div class="col-md-12 text-center mt-3">
                                <button class="btn btn-danger-light" @click="updateSettings()">
                                    {{$t('edit')}}
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {VueEditor} from "vue2-editor";

    export default {
        name: "settings",
        data() {
            return {
                dataModel: {},
                settings: null
            }
        },
        components: {VueEditor},
        mounted() {
            this.getAllSettings();
        },
        methods: {
            updateSettings() {
                let vm = this;
                vm.$helper.showLoader();
                let request_data = vm.dataModel;
                let dispatch = this.$store.dispatch('moduleCommon/updateSetting', request_data);
                dispatch.then(() => {
                    vm.$helper.hideLoader();
                    vm.$helper.showMessage('success', vm)
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
            getAllSettings() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleCommon/fetchSettings', {});
                dispatch.then((response) => {
                    response = response.data;
                    vm.settings = this.$store.getters['moduleCommon/getAllSettings'];
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            }
        }
    }
</script>

<style scoped>

</style>