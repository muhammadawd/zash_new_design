<template>
    <div>
        <div class="container  ">
            <div class="row">
                <div class="col-md-12">
                    <div class="post">
                        <div class="avatar"></div>
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-75"></div>
                        <div class="line"></div>
                        <br/> <br/>
                    </div>

                    <div class="post">
                        <div class="line w-100"></div>
                        <div class="line"></div>
                        <br/> <br/>
                    </div>

                    <div class="post">
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-75"></div>
                        <div class="line"></div>
                        <br/> <br/>
                    </div>

                    <div class="post">
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-100"></div>
                        <div class="line w-75"></div>
                        <div class="line"></div>
                        <br/> <br/>
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

    .post .avatar {
        float: left;
        width: 52px;
        height: 52px;
        background-color: #ccc;
        border-radius: 25%;
        margin: 8px;
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
            background-position: -100px;
        }
        40%, 100% {
            background-position: 140px;
        }
    }

    @keyframes shine-avatar {
        0% {
            background-position: -32px;
        }
        40%, 100% {
            background-position: 208px;
        }
    }

</style>