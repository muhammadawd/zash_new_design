<template>
    <div class="pb-5 pt-5 bg-gray">
        <div class="containers">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="post">
                            <div class="line w-25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center mb-5 mt-5">
                <div class="col-md-3" v-for="count in [1,2,3,4]" :class="count == 1 ? '':'d-md-flex d-none'">
                    <div class="header_skeleton">
                        <div class="header_avatar"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "homeProducts"
    }
</script>

<style scoped>
    .header_skeleton {
        width: 100%;
        height: 350px;
    }

    .header_skeleton .header_avatar {
        width: 100%;
        height: 350px;
        background-image: linear-gradient(90deg, #F4F4F4 0px, rgba(229, 229, 229, 0.8) 40px, #F4F4F4 80px);
        background-size: contain;
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