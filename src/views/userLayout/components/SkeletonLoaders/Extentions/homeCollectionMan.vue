<template>
    <div class="p-5 bg-white">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-left ">
                    <div class="post">
                        <div class="line w-50"></div>
                    </div>
                </div>
            </div>
            <div class="row direction">
                <div class="col-md-8">
                    <div class="row text-left">
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 d-none d-md-flex pb-0 text-black"></h2>
                            <div class="header_skeleton">
                                <div class="header_avatar"></div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <h2 class="fun_font mb-0 d-md-none mt-5 pb-0 text-black"></h2>
                            <div class="post">
                                <div class="line w-100"></div>
                                <div class="line w-50"></div>
                            </div>
                            <div class="relative">
                                <br><br>
                                <div class="post">
                                    <div class="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-right d-none d-md-flex">
                        <div class="col-md-7">
                            <h5 class="pt-5 mt-5 pointer">
                                <div class="post">
                                    <div class="line w-100"></div>
                                    <div class="line w-50"></div>
                                </div>
                            </h5>
                            <div class="relative">
                                <div class="post">
                                    <br><br>
                                    <div class="line"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 text-black"></h2>
                            <div class="header_skeleton">
                                <div class="header_avatar"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row text-right d-md-none">
                        <div class="col-md-7 mt-5">

                            <div class="header_skeleton">
                                <div class="header_avatar"></div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <h2 class="fun_font mb-0 pb-0 mt-5 text-black"></h2>
                            <div class="post">
                                <div class="line w-75"></div>
                                <div class="line w-50"></div>
                            </div>
                            <div class="relative">
                                <div class="post">
                                    <br><br>
                                    <div class="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="header_skeleton" style="height: 500px;">
                        <div class="header_avatar" style="height: 500px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeCollectionMan"
    }
</script>

<style scoped>
    .header_skeleton {
        width: 100%;
        height: 250px;
    }

    .header_skeleton .header_avatar {
        width: 100%;
        height: 250px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: contain;
        animation: shine-avatar 4s infinite ease-out;
    }

    .post {
        height: 65px;
    }

    .post .avatar {
        float: left;
        width: 52px;
        height: 52px;
        background-color: #ccc;
        border-radius: 25%;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: 600px;
        animation: shine-avatar 4s infinite ease-out;
    }

    .post .line {
        float: left;
        width: 140px;
        height: 16px;
        margin-top: 12px;
        border-radius: 7px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: 600px;
        animation: shine-lines 2s infinite ease-out;
    }

    .post .avatar + .line {
        margin-top: 11px;
        width: 100px;
    }

    .post .line ~ .line {
        background-color: #ddd;
    }

    @keyframes shine-lines {
        0% {
            background-position: -800px;
        }
        50% {
            background-position: 0;
        }
        100% {
            background-position: 800px
        }
    }

    @keyframes shine-avatar {
        0% {
            background-position: -800px;
        }
        50% {
            background-position: 0;
        }
        100% {
            background-position: 800px
        }
    }

</style>