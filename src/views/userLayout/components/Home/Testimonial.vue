<template>

    <!-- ============================== Start Newsletter ================================== -->
    <section class="bg-cover newsletter inverse-theme"
             :style="{backgroundImage:'url('+require('@/assets/img/testimonials.jpg')+')'}"
             style="background-attachment:fixed"
             data-overlay="9">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 col-md-8 col-sm-12">
                    <div class="text-center direction" v-if="testimonials.length">
                        <h1 class="fun_font font-weight-bold text-white mb-4">{{$t('testimonials')}}</h1>
                        <slick
                                ref="slick"
                                :options="slickOptions">
                            <div v-for="(testimonial ,key) in testimonials" class="slide w-100" :key="key">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <img :src="testimonial.image_path" class="img-rounded" style="width: 100px;margin: auto;border-radius: 50%;"
                                                 alt="">

                                            <h3 class="text-center font-weight-bold mt-4">
                                                {{testimonial.translated.title}}</h3>
                                            <p class="text-center">{{testimonial.translated.description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </slick>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ================================= End Newsletter =============================== -->

</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Testimonial",
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    dots: true,
                    rtl: this.$i18n.locale == 'ar' ? true : false,
                },
                testimonials: [],
            }
        },
        components: {
            Slick
        },
        mounted() {
            this.getAllTestimonial();
        },
        methods: {
            getAllTestimonial() {
                let vm = this;
                vm.$helper.showLoader();
                let dispatch = this.$store.dispatch('moduleTestimonial/getAllTestimonials', {});
                dispatch.then((response) => {
                    vm.testimonials = this.$store.getters['moduleTestimonial/getAllTestimonials'];
                    vm.$helper.hideLoader();
                }).catch((error) => {
                    vm.$helper.handleError(error, vm);
                    vm.$helper.hideLoader();
                });
            },
        }
    }
</script>

<style>

    .agile__actions {
        position: absolute;
        width: 100%;
        top: 30%;
    }

    .agile__nav-button {
        background: transparent;
        border: 0;
        cursor: pointer;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    .slide {
        overflow: hidden;
        width: 100%
    }

    .agile--ssr .agile__slides > * {
        overflow: hidden;
        width: 0
    }

    .agile--ssr .agile__slides > *:nth-child(1) {
        width: 0
    }

    .agile--ssr .agile__slides > *:nth-child(2) {
        width: 100%
    }
</style>