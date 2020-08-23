<template>
    <div id="main-wrapper">
        <TheNavBar/>

        <section class="gray pt-0">
            <div class="container-fluid">

                <!-- Row -->
                <div class="row direction">

                    <div class="col-lg-3 col-md-3 p-0 d-print-none">
                        <Sidebar/>
                    </div>

                    <div class="col-lg-9 col-md-9 col-sm-12 d-print-none">
                        <router-view></router-view>
                    </div>
                    <div class="col-12 d-none d-print-block">
                        <router-view></router-view>
                    </div>

                </div>
                <!-- Row -->

            </div>
        </section>
        <toTop/>
        <TheFooter/>
    </div>
</template>

<script>
    import TheNavBar from '../components/adminLayout/TheNavBar'
    import TheFooter from '../components/adminLayout/TheFooter'
    import Sidebar from '../components/adminLayout/Sidebar'
    import toTop from '../components/adminLayout/toTop'

    export default {
        name: "AdminMain",
        components: {
            TheNavBar,
            toTop,
            Sidebar,
            TheFooter
        }
    }
</script>

<style scoped>

</style>