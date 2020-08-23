<template>
    <div>
        <div class="container">
            <div class="row direction justify-content-center">
                <div class="col-md-6 text-center">
                    <h3 class="pt-4">{{$t('donations')}}</h3>
                    <img :src="require('@/assets/img/freelancer.png')" class="w-50" alt="">
                </div>
                <div class="col-12"></div>
                <div class="col-md-3" v-for="(price , index) in prices" :key="index">
                    <div class="card animated_hover text-center pt-3 pb-3">
                        <div class="card-body">
                            <h2 class="pb-2">{{price}}
                                <small>{{$t('currency')}}</small>
                            </h2>
                            <button class="btn bg-danger" @click="payPrice(price)">{{$t('support')}}</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card animated_hover text-center pt-3 pb-3">
                        <div class="card-body">
                            <h2 class="pb-2"> {{$t('other')}}
                            </h2>
                            <button class="btn bg-danger" @click="$refs.supportModal.open()">{{$t('support')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sweet-modal ref="supportModal">
            <div class="row">
                <div class="col-md-12">
                    <h4>{{$t('paid_price')}}</h4>
                    <input type="text" class="form-control text-center" name="cost" v-model="price">
                    <span class="text-danger text-sm"> {{ errors.first('cost') }}</span> <br>
                    <button class="btn mt-3 bg-danger" @click="payPrice(price)">{{$t('support')}}</button>
                </div>
            </div>
        </sweet-modal>
    </div>
</template>

<script>

    import {SweetModal} from 'sweet-modal-vue'

    export default {
        name: "About",
        components: {SweetModal},
        mounted() {

        },
        data() {
            return {
                price: 0,
                prices: [10, 20, 50, 100]
            }
        },
        computed: {},
        methods: {
            payPrice(price) {
                let vm = this;
                vm.$helper.showLoader();
                const payload = {
                    cost: price,
                    payment_type: 'knet'
                };

                vm.$store.dispatch('moduleCommon/PayDonation', payload)
                    .then((res) => {
                        vm.$helper.hideLoader()
                        vm.$helper.showMessage('success', vm)
                        location.href = res.data.data.link;
                    })
                    .catch(error => {
                        vm.$helper.handleError(error, vm);
                        vm.$helper.hideLoader()
                    })
            },
        }
    }
</script>

<style>
    .animated_hover {
        transition: all 0.5s ease-in-out;
        cursor: pointer;
    }

    .animated_hover:hover {
        transform: translateY(-10px);
        background: #eee;
        color: #fff;
    }
</style>