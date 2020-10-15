<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 d-none d-md-flex">
                    <div class="bg-whites mb-3">
                        <ul class="grid_list">
                            <li class="list-inline-item p-2">
                                <a :class="layout  == 'list' ? 'active' : ''" href=""
                                   @click.prevent="layout = 'list'">
                                    <i class="ti-list fa-2x"></i>
                                </a>
                            </li>
                            <li class="list-inline-item p-2">
                                <a :class="layout  == 'grid' ? 'active' : ''" href=""
                                   @click.prevent="layout = 'grid'">
                                    <i class="ti-layout-grid2 fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="float-right">
                        <ul class="list-unstyled">
                            <li class="list-inline-item">
                                <a href=""
                                   @click.prevent="next ? $router.push({name:'show_item',params:{slug:next}}) : ''">
                                    <i class="ti-arrow-circle-left fa-lg" :class="next ? 'text-dark' : 'text-danger'"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href=""
                                   @click.prevent="previous ? $router.push({name:'show_item',params:{slug:previous}}) : ''">
                                    <i class="ti-arrow-circle-right fa-lg" :class="previous ? 'text-dark' : 'text-danger'"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-8" id="ImagesSection">
                    <ItemGallery :layout="layout" :product="product"/>
                </div>
                <div class="col-md-4 relative">
                    <div :style="(!isMobile() && !hasScrolledToBottom) ? {position:'fixed', top: '55px'}:{position:'relative'}">
                        <ItemInfo :product="product"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemInfo from './ItemInfo'
    import ItemGallery from './ItemGallery'

    export default {
        name: "MainContainer",
        props: ['product', 'previous', 'next'],
        components: {ItemInfo, ItemGallery},
        data() {
            return {
                layout: 'grid',
                hasScrolledToBottom: true
            }
        },
        mounted() {
            $(document).on('scroll', () => {
                let scroll = $(document).scrollTop();
                if (scroll < 150) {
                    this.hasScrolledToBottom = true
                    return
                }
                if (!$('#ImagesSection')) {
                    return
                }
                let outter_height = $('#ImagesSection').outerHeight();
                let offset_top = $('#ImagesSection').offset().top;
                scroll = scroll - offset_top + 250;
                console.log(scroll, outter_height)
                if (scroll >= outter_height) {
                    this.hasScrolledToBottom = true
                } else {
                    this.hasScrolledToBottom = false
                }
            })
        },
        methods: {
            isMobile() {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>

</style>