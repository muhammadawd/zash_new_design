<template>
    <div class="home_slider pt-5 bg-gray">
        <div class="containers">
            <div class="row justify-content-center align-items-center mt-5">
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