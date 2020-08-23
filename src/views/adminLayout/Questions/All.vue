<template>
    <div>
        <!--{{categories}}-->
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" @click.prevent>{{$t('dashboard')}}</a></li>
                        <li class="breadcrumb-item active" aria-current="page" @click.prevent>{{$t('all_questions')}}
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
                            <h2 class="font-weight-bold fun_font text-center">{{$t('all_questions')}}</h2>
                        </div>
                    </div>
                    <div class="dashboard_container_header">
                        <div class="dashboard_fl_1">
                            <ul>
                                <li class="list-inline-item">
                                    <button class="btn btn-danger-light"
                                            v-if="$helper.hasAccessPermission('create-question')"
                                            @click="$router.push({name:'add_questions'})">
                                        <i class="ti-plus"></i>
                                        {{$t('add')}}
                                    </button>
                                </li>
                                <!--<li class="list-inline-item">-->
                                <!--<button class="btn btn-warning-light">-->
                                <!--<i class="ti-printer"></i>-->
                                <!--{{$t('print')}}-->
                                <!--</button>-->
                                <!--</li>-->
                            </ul>
                        </div>
                        <div class="dashboard_fl_2">
                            <ul class="mb0">
                                <li class="list-inline-item">
                                    <form class="form-inline my-2 my-lg-0" dir="ltr"
                                          @submit.prevent="getAllQuestions()">
                                        <input class="form-control" type="search" :placeholder="$t('search')"
                                               v-model="query"
                                               aria-label="Search"/>
                                        <button class="btn my-2 my-sm-0" type="submit">
                                            <i class="ti-search"></i>
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="dashboard_container_body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="thead-default">
                                <tr>
                                    <th class="text-left ">#</th>
                                    <th class="text-left ">{{$t('question_ar')}}</th>
                                    <th class="text-left " width="100px">{{$t('operation')}}</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(question , index) in questions" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{question.question_ar}}</td>
                                    <td>
                                        <div class="btn-group direction-inverse">
                                            <button class="btn custom_btn btn-primary-light"
                                                    v-if="$helper.hasAccessPermission('delete-question')"
                                                    @click="deleteQuestion(question.id)">
                                                {{$t('delete')}}
                                            </button>
                                            <button class="btn custom_btn btn-success-light"
                                                    v-if="$helper.hasAccessPermission('update-question')"
                                                    @click="$router.push({name:'edit_questions',params:{id:question.id}})">
                                                {{$t('edit')}}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "All",
        data() {
            return {
                questions: [],
                query: null,
            }
        },
        mounted() {
            this.getAllQuestions();
        },
        methods: {
            prepareFilters() {
                return {
                    query: this.query
                };
            },
            getAllQuestions() {
                let vm = this;
                vm.$helper.showLoader();
                let filters = vm.prepareFilters();
                let dispatch = this.$store.dispatch('moduleQuestion/getAllQuestions', filters);
                dispatch.then((response) => {
                    vm.questions = this.$store.getters['moduleQuestion/getAllQuestions'];
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
            deleteQuestion(id) {
                let vm = this;
                vm.$swal({
                    title: vm.$t('warning'),
                    text: vm.$t('are_you_sure'),
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: vm.$t('yes'),
                    cancelButtonText: vm.$t('no'),
                }).then((result) => {
                    if (result.value) {
                        vm.deleteRequest(id)
                    }
                });
            },
            deleteRequest(id) {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleQuestion/removeQuestion', {
                    ids: [id]
                });
                dispatch.then((response) => {
                    vm.$helper.hideLoader();
                    vm.questions = vm.$helper.deleteMulti([id], vm.questions);
                    location.reload()
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