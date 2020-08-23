<template>
    <div style="background: #eee;padding-top: 50px;padding-bottom: 50px">
        <div class="container pt-5 pb-5">
            <div class="row direction">
                <div class="col-md-8 text-left">
                    <h2 class=" p-3">{{$t('faq')}}</h2>
                    <badger-accordion :icons="false">
                        <badger-accordion-item v-for="(question , index) in questions" :key="index">
                            <template slot="header">{{question.translated.question}}</template>
                            <template slot="content">
                                <div class="p-2">
                                    <p class="lead">{{question.translated.answer}}</p>
                                </div>
                            </template>
                        </badger-accordion-item>
                    </badger-accordion>
                </div>
                <div class="col-md-4">
                    <img :src="require('@/assets/img/faq.png')" class="w-100" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
    import 'badger-accordion/dist/badger-accordion.scss'

    export default {
        name: "FAQ",
        data() {
            return {
                questions: []
            };
        },
        mounted() {
            this.getAllQuestions();
        },
        components: {
            BadgerAccordion,
            BadgerAccordionItem
        },
        methods: {
            getAllQuestions() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleQuestion/getAllQuestions', {});
                dispatch.then((response) => {
                    vm.questions = this.$store.getters['moduleQuestion/getAllQuestions'];
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
        },
    }
</script>

<style>
    .badger-accordion__header .js-badger-accordion-header .badger-accordion-toggle {
        background: #da0b4e;
    }

    .badger-accordion__header .js-badger-accordion-header .badger-accordion-toggle .badger-accordion-title {
        text-align: right;
        background: #da0b4e;
        color: #fff;
        padding: 15px;
        width: 100%;
        font-weight: bold;
    }

    .badger-accordion--initialized .badger-accordion__panel {
        background-color: #fff;
    }
</style>