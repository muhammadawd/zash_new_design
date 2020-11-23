<template>
    <div class="border-shadows text-left p-2">
        <div class="row">
            <div class="col-12 mb-5">

                <h2 class="font-weight-bold fun_font m-0">
                    <div class="post">
                        <div class="line w-100"></div>
                    </div>
                    <br>
                </h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <form class="">
                    <div class="post">
                        <div class="line w-100" style="height: 80px;"></div>
                    </div>
                    <br>
                </form>

            </div>
            <div class="col-12 mb-5">
                <h2 class="font-weight-bold fun_font m-0">
                    <div class="post">
                        <div class="line w-100"></div>
                    </div>
                    <br>
                </h2>
                <div class="progress">
                    <div class="progress-bar bg-black" style="height: 2px;width:40%"></div>
                </div>
                <ul class="mt-4 ml-3" v-for="(count,k) in  [1,2,3,4,5]">
                    <li class="mt-5">
                        <a href="">
                            <h5 class="size-xs font-weight-bold">
                                <div class="post">
                                    <div class="line w-100"></div>
                                </div>
                                <br>
                            </h5>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "homeSlider"
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
        animation: shine-lines 4s infinite ease-out;
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