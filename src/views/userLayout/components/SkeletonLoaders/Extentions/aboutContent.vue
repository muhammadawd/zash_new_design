<template>
    <div class="border-shadows bg-gray text-left   p-2">
        <div class="row justify-content-center align-items-center" v-for="count in [1]">
            <div class="col-12">
                <br/><br/><br/><br/>
            </div>
            <div class="col-md-6">

                <div class="post">
                    <div class="line w-25"></div>
                    <br/><br/><br/><br/>
                </div>
                <div class="post">
                    <div class="line w-100"></div>
                    <div class="line w-100"></div>
                    <div class="line w-100"></div>
                    <div class="line w-75"></div>
                    <div class="line w-100"></div>
                    <div class="line w-100"></div>
                    <div class="line w-100"></div>
                    <div class="line w-50"></div>
                    <div class="line w-100"></div>
                    <div class="line w-50"></div>
                </div>
            </div>
            <div class="col-md-4 mb-2 p-2">
                <div class="header_skeleton bg-white">
                    <div class="header_avatar"></div>
                </div>
            </div>
            <div class="col-12">
                <br/><br/><br/><br/>
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
        height: 450px;
    }

    .header_skeleton .header_avatar {
        width: 100%;
        height: 450px;
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