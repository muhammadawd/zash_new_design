<template>
    <div class="home_slider pt-5" v-if="current_slide" :style="{background: bgColor}">
        <div class="controller">
            <div class="arrows arrows_right" @click="goNext()">
                <i class="ti-arrow-right"></i>
            </div>
            <div class="arrows arrows_left" @click="goPrev()">
                <i class="ti-arrow-left"></i>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-5 text-left pt-5">
                    <div class="item_text justify-content-center align-items-center">
                        <!--animate__animated animate__bounce animate__infinite-->
                        <h1 class="fun_font slider_main_title ">
                            {{$helper.getFirstWord(current_slide.translated.title)}}</h1>
                        <h1 class="fun_font slider_main_title2 animate__animated animate__pulses animate__infinite">
                            {{$helper.removeFirstWord(current_slide.translated.title)}}</h1>
                        <p class="slider_main_paragraph  animate__animated animate__zoomIns animate__infinite">
                            {{current_slide.translated.description}}
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="imageContainer">
                        <img :src="current_slide.image" class="slideImage">
                    </div>
                    <!--<img :src="require('@/assets/img/slide1.png')" class="w-100">-->
                </div>
            </div>
            <div class="row justify-content-start text-center" style="position:absolute;width: 100%;bottom: 0;">
                <div class="col-md-9">
                    <div class="new_collection pointer" @click="$router.push({name:'search'})">
                        <div class="border_collection"></div>
                        {{$t('new_collection')}}
                        <i class="ti-arrow-right"></i>
                    </div>
                    <div class="slider_pagination">
                        <div class="d-flex">
                            <div style="flex: 2">
                                <div class="justify-content-end">
                                    <h4 class="float-right fun_font black">0{{getSliders.length}}</h4>
                                    <h4 class="float-left fun_font">0{{current_slide_index + 1}}</h4>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-black" role="progressbar"
                                         :style="{'width': getProgressVal+'%'}"
                                         aria-valuenow="25"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress_image" style="flex: 1">
                                <img :src="getSliders[current_slide_index] ? getSliders[current_slide_index].image : current_slide.image"
                                       style="width: 80px;height: 100px">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import 'animate.css'

    export default {
        name: "Header",
        data() {
            return {
                current_slide: null,
                current_slide_index: 0,
                sliders: [],
                bgColor: '#ecdada',
                progress: 0
            }
        },
        mounted() {
            let sliders = this.$store.getters['moduleSlider/getAllSliders'];
            if (sliders.length) {
                this.current_slide = sliders[0]
            }
            document.documentElement.style.setProperty('--animate-duration', '3s');

            this.getProgressPercent()
        },
        computed: {
            getSliders() {
                return this.$store.getters['moduleSlider/getAllSliders'];
            },
            getProgressVal() {
                return this.progress;
            }
        },
        methods: {
            goNext() {
                let vm = this;
                // vm.current_slide_index += 1;
                let current_slide_index = vm.current_slide_index
                let length = vm.getSliders.length;
                if (current_slide_index < length - 1) {
                    vm.current_slide = vm.getSliders[current_slide_index];
                    vm.current_slide_index += 1;
                } else {
                    vm.current_slide = vm.getSliders[0];
                    vm.current_slide_index = 0;
                }
            },
            goPrev() {
                let vm = this;
                // vm.current_slide_index += 1;
                let current_slide_index = vm.current_slide_index
                let length = vm.getSliders.length;
                if (current_slide_index > 0) {
                    vm.current_slide = vm.getSliders[current_slide_index];
                    vm.current_slide_index -= 1;
                } else {
                    vm.current_slide = vm.getSliders[0];
                    vm.current_slide_index = length - 1;
                }
            },
            getSliderFunctionality() {
                let vm = this;
                let colors = ['#ecdada', '#dde9ed', '#f7d0cb', '#ecdada', '#dde9ed', '#f7d0cb', '#ecdada', '#dde9ed', '#f7d0cb']
                let rand = Math.floor(Math.random() * 6) + 1;
                vm.bgColor = colors[rand];

                let sliders = vm.getSliders;
                let length = sliders.length;
                vm.current_slide = sliders[vm.current_slide_index];
                console.log(length)
                console.log(vm.current_slide_index)
                if (length - 1 > vm.current_slide_index) {
                    vm.current_slide_index += 1;
                } else {
                    vm.current_slide_index = 0;
                }
            },
            getProgressPercent() {
                let vm = this;
                setTimeout(() => {
                    vm.getSliderFunctionality();
                }, 2000)
                setInterval(() => {
                    if (vm.progress == 100) {
                        vm.progress = 0;
                        vm.getSliderFunctionality();
                    }
                    vm.progress += 1;
                }, 30)
            }
        }
    }
</script>

<style scoped>

</style>