<template>
    <div class="home_slider pt-5">
        <div class="controller">
            <div class="arrows arrows_right">
                <i class="ti-arrow-right"></i>
            </div>
            <div class="arrows arrows_left">
                <i class="ti-arrow-left"></i>
            </div>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-5 text-left pt-5">
                    <div class="justify-content-center align-items-center">
                        <h1 class="fun_font slider_main_title">Spring</h1>
                        <h1 class="fun_font slider_main_title">Summer 2020</h1>
                        <p class="slider_main_paragraph">
                            This shirt is made from a contrasting panels of smooth cotton poplin and a stretchy cotton
                            jersey.
                        </p>
                    </div>
                </div>
                <div class="col-md-3">
                    <img :src="require('@/assets/img/slide1.png')" class="w-100">
                </div>
            </div>
            <div class="row justify-content-start text-center" style="position:absolute;width: 100%;bottom: 0;">
                <div class="col-md-9">
                    <div class="new_collection">
                        <div class="border_collection"></div>
                        {{$t('new_collection')}}
                        <i class="ti-arrow-right"></i>
                    </div>
                    <div class="slider_pagination">
                        <div class="d-flex">
                            <div style="flex: 2">
                                <div class="justify-content-end">
                                    <h4 class="float-right fun_font black">03</h4>
                                    <h4 class="float-left fun_font">02</h4>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar bg-black" role="progressbar" :style="{'width': getProgressVal+'%'}"
                                         aria-valuenow="25"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="progress_image" style="flex: 1">
                                <img :src="require('@/assets/img/bag.png')" class="w-100">
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
        name: "Header",
        data() {
            return {
                progress: 0
            }
        },
        mounted() {
            this.getProgressPercent()
        },
        computed:{
            getProgressVal(){
                return this.progress;
            }
        },
        methods: {
            getProgressPercent() {
                let vm = this;
                setInterval(() => {
                    if (vm.progress == 100) vm.progress = 0;
                    vm.progress += 1;
                }, 100)
            }
        }
    }
</script>

<style scoped>

</style>