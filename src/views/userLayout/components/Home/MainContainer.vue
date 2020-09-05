<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-1 d-none d-md-block pt-5 text-center">
                    <ul class="social-icons pt-5">
                        <li class="social-icon animationIcon" v-if="getSettings.youtube">
                            <a :href="getSettings.youtube[0].value">
                                <i class="fab text-black fa-youtube fa-lg"></i>
                            </a>
                        </li>
                        <li class="social-icon animationIcon" v-if="getSettings.facebook">
                            <a :href="getSettings.facebook[0].value">
                                <i class="fab text-black fa-facebook fa-lg"></i>
                            </a>
                        </li>
                        <li class="social-icon animationIcon" v-if="getSettings.twitter">
                            <a :href="getSettings.twitter[0].value">
                                <i class="fab text-black fa-twitter fa-lg"></i>
                            </a>
                        </li>
                        <li class="social-icon animationIcon" v-if="getSettings.instagram">
                            <a :href="getSettings.instagram[0].value">
                                <i class="fab text-black fa-instagram fa-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-10 text-center">
                    <Categories/>
                </div>
                <div class="col-md-1 d-none d-md-block text-center">
                    <div class="text-center text-black scroll_bottom">
                        <ul class="pt-5 rotate_90 text-center pointer animationScroll" id="scrollDown">
                            <li class="list-inline-item">
                                <h1 class="text-black fun_font">
                                    {{$t('scroll_bottom')}}
                                </h1>
                            </li>
                            <li class="list-inline-item ml-2 mr-2">
                                <i class="far fa-arrow-alt-circle-up fa-2x rotate_90"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Categories from './Categories'

    export default {
        name: "MainContainer",
        components: {Categories},
        mounted() {
            this.scrollDown()
        },
        computed: {
            getSettings() {
                return this.$store.getters['moduleCommon/getAllSettings']
            },
        },
        methods: {
            scrollDown() {

                $("#scrollDown").on('click', function (event) {
                    event.preventDefault();
                    let footer = $("#footer").offset().top;
                    $("html, body").animate({scrollTop: footer}, 2000);
                    return false;
                });
            }
        }
    }
</script>

<style scoped>

</style>