<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-0">
                    <div class="category_item bg-1">
                        <h1 class="fun_font text-left category_name">Elegant</h1>
                        <img :src="require('@/assets/img/image3@3x.png')" class="w-100" alt="">
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class="category_item bg-2">
                        <h1 class="fun_font text-left category_name">Casual</h1>
                        <img :src="require('@/assets/img/image4@3x.png')" class="w-100" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Categories"
    }
</script>

<style scoped>

</style>