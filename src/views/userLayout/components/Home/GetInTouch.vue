<template>
    <div class="mt-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6 text-left">
                    <div class="card">
                        <div class="card-body">
                            <h1 class="collection_title fun_font">{{$t('get_in_touch')}}</h1>
                            <p>{{$t('subscribe_p')}}</p>
                            <form class="sup-form direction mb-5">
                                <input type="text" :placeholder="$t('email_here')" class="form-control border">
                                <input type="submit" class="btn btn-theme bg-black text-white"
                                       :value="$t('subscribe')">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "GetInTouch",
        components: {},
        data() {
            return {}
        }
    }
</script>

<style>
</style>