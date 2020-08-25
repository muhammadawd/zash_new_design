<template>
    <div>
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <h1 class="fun_font size-lg mb-5">{{$t('get_quote')}}</h1>

                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" :placeholder="$t('your_name')">
                    </div>

                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" :placeholder="$t('your_email')">
                    </div>

                    <div class="form-group mb-4">
                        <input type="text" class="form-control font-weight-bold" :placeholder="$t('your_phone')">
                    </div>

                    <div class="form-group mb-4">
                        <textarea class="form-control font-weight-bold" :placeholder="$t('message')"></textarea>
                    </div>

                    <div class="form-group mb-4">
                        <button class="btn btn-secondary bg-black text-white float-right">{{$t('send')}}</button>
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
                                        <b class="font-weight-bold">Payna Headquarter</b>
                                    </li>
                                    <li class="mt-2">
                                        <div class="pr-5 pl-5 text-dark">
                                            <small>
                                                PO Box 16122 Collins Street West
                                                Victoria 8007 Australia
                                            </small>
                                        </div>
                                    </li>
                                </ul>
                                <ul class="text-black mb-5">
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
                                <ul class="text-dark mb-5">
                                    <li class="mt-4">
                                        <i class="ti-email fa-lg pr-4"></i>
                                        <b class="font-weight-bold">info@la-studioweb.com</b>
                                    </li>
                                    <li class="mt-4">
                                        <i class="ti-mobile fa-lg pr-4"></i>
                                        <b class="font-weight-bold">+812-466-7130</b>
                                    </li>
                                </ul>
                                <div class="text-center">
                                    <ul class="mt-4">
                                        <li class="list-inline-item animationIcon p-2">
                                            <a class="text-black" href="">
                                                <i class="fab fa-facebook  fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2">
                                            <a class="text-black" href="">
                                                <i class="fab fa-twitter fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2">
                                            <a class="text-black" href="">
                                                <i class="fab fa-instagram  fa-2x"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item animationIcon p-2">
                                            <a class="text-black" href="">
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

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.6858599604975!2d30.993374715132695!3d30.783395081619492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQ3JzAwLjIiTiAzMMKwNTknNDQuMCJF!5e0!3m2!1sen!2s!4v1485856747489"
                    width="100%" height="450" frameborder="0" style="border:0" scrolling="no"
                    allowfullscreen=""></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        components: {},
        data() {
            return {}
        },
        mounted() {
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>