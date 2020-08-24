<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <h3 class="text-right size-xs pt-2">{{$t('showing')}} 1-16 of 39 {{$t('results')}}</h3>
                        </div>
                        <div class="col-md-6 text-right text-black font-weight-bold">
                            <ul class="grid_list">
                                <li class="list-inline-item p-2">
                                    <a href="">
                                        <i class="ti-list fa-2x"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item p-2">
                                    <a class="active" href="">
                                        <i class="ti-layout-grid2 fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <Filters/>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-4" v-for="(item,indx) in [1,2,3,4,5,6]" :key="indx" :index="indx">
                            <div class="collection_slide pointer p-2 "
                                 @click="$router.push({name:'show_item',params:{id:1}})">
                                <img :src="require('@/assets/img/1.png')" class="w-100" alt="">
                                <div class="p-1">
                                    <div class="font-weight-bold text-black">Women's Dolman Sleeve Bodysuit</div>
                                    <h4 class="font-weight-bold text-black">$ 25</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Filters from './Filters'

    export default {
        name: "Content",
        components: {Filters},
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