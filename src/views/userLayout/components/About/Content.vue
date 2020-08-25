<template>
    <div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 text-black text-left">
                    <h1 class="fun_font size-lg mb-4">WE LOVE FASHION</h1>
                    <p>Praesent sed ex vel mauris eleifend mollis. Vestibulum dictum sodales ante, ac pulvinar urna
                        sollicitudin in. Suspendisse sodales dolor nec mattis convallis. Quisque ut nulla viverra,
                        posuere lorem eget, ultrices metus. Nulla facilisi. Duis aliquet, eros in auctor aliquam,
                        tortor justo laoreet nisi, nec pulvinar lectus diam nec libero. Nullam sit amet dia
                    </p>
                    <p>
                        Cras porta posuere lectus, vitae consectetur dolor elementum id. Ut interdum, sem eget
                        varius eleifend, ex risus gravida purus, sed finibus tortor nisi maximus orci. Etiam vel
                        sollicitudi
                    </p>
                </div>
                <div class="col-md-6 text-md-right text-center">
                    <img :src="require('@/assets/img/1.png')" class="w-75 mb-3" alt="">
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col-md-6 text-md-left text-center">
                    <img :src="require('@/assets/img/2.png')" class="w-75 mb-3" alt="">
                </div>
                <div class="col-md-6 text-black text-left">
                    <h1 class="fun_font size-lg mb-4">WHY CHOOSE US?</h1>
                    <p>Praesent sed ex vel mauris eleifend mollis. Vestibulum dictum sodales ante, ac pulvinar urna
                        sollicitudin in. Suspendisse sodales dolor nec mattis convallis. Quisque ut nulla viverra,
                        posuere lorem eget, ultrices metus. Nulla facilisi. Duis aliquet, eros in auctor aliquam, tortor
                    </p>
                    <ul class="mt-4 mb-4">
                        <li class="mb-2">
                            <i class="fas fa-caret-right text-danger"></i>
                            Praesent ullamcorper lacinia ultrices
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-caret-right text-danger"></i>
                            Morbi aliquam hendrerit felis, eu
                        </li>
                        <li class="mb-2">
                            <i class="fas fa-caret-right text-danger"></i>
                            Cras porta posuere lectus, vitae aliquam, tortor
                        </li>
                    </ul>
                    <p>
                        Posuere lorem eget, ultrices metus. Nulla facilisi. Duis aliquet, eros in auctor aliquam, tortor
                    </p>
                </div>
            </div>
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