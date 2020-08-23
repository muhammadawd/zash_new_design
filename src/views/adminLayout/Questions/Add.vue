<template>
    <div>
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" @click.prevent>{{$t('dashboard')}}</a></li>
                        <li class="breadcrumb-item active" aria-current="page" @click.prevent>{{$t('add_question')}}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="dashboard_container">
                    <div class="row">
                        <div class="col-12 pt-3">
                            <h2 class="font-weight-bold fun_font text-center">{{$t('add_question')}}</h2>
                        </div>
                    </div>
                    <div class="dashboard_container_body p-2">

                        <div class="row">

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label class="font-weight-bold">{{$t('question_ar')}}</label>
                                    <input type="text"
                                           v-validate="'required'" data-vv-name="question_ar"
                                           v-model="dataModel.question_ar"
                                           class="form-control"
                                           :placeholder="$t('question_ar')">
                                    <span class="text-danger text-sm">{{ errors.first('question_ar') }}</span>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label class="font-weight-bold">{{$t('question_en')}}</label>
                                    <input type="text"
                                           v-validate="'required'" data-vv-name="question_en"
                                           v-model="dataModel.question_en"
                                           class="form-control"
                                           :placeholder="$t('question_en')">
                                    <span class="text-danger text-sm">{{ errors.first('question_en') }}</span>
                                </div>
                            </div>

                        </div>

                        <div class="row">

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">{{$t('answer_ar')}}</label>
                                    <textarea
                                            v-validate="'required'" data-vv-name="answer_ar"
                                            v-model="dataModel.answer_ar"
                                            class="form-control"
                                            :placeholder="$t('answer_ar')"></textarea>
                                    <span class="text-danger text-sm">{{ errors.first('answer_ar') }}</span>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">{{$t('answer_en')}}</label>
                                    <textarea
                                            v-validate="'required'" data-vv-name="answer_en"
                                            v-model="dataModel.answer_en"
                                            class="form-control"
                                            :placeholder="$t('answer_en')"></textarea>
                                    <span class="text-danger text-sm">{{ errors.first('answer_en') }}</span>
                                </div>
                            </div>


                            <div class="col-md-12 text-center">
                                <button class="btn btn-danger-light" @click="submitForm()">
                                    {{$t('add')}}
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
    export default {
        name: "Add",
        data() {
            return {
                dataModel: {
                    question_ar: '',
                    question_en: '',
                }
            }
        },
        mounted() {

        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then(result => {
                    if (result) {
                        // if form have no errors
                        this.addQuestion();
                    } else {
                        // form have errors
                    }
                })
            },
            addQuestion() {
                let vm = this;
                vm.$helper.showLoader();
                const payload = vm.dataModel;
                vm.$store.dispatch('moduleQuestion/addQuestion', payload)
                    .then(() => {
                        vm.$helper.hideLoader();
                        vm.$helper.showMessage('success', vm);
                        vm.$router.push({name: 'all_questions'})
                    })
                    .catch(error => {
                        vm.$helper.handleError(error, vm);
                        vm.$helper.hideLoader()
                    })
            },
        }
    }
</script>

<style scoped>

</style>