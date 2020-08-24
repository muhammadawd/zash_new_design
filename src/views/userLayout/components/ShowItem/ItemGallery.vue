<template>
    <div class="pt-5">
        <div class="container">
            <div class="row direction text-left">
                <div class="col-md-12">
                    <div class="zoomImage">
                        <ProductZoomer
                                :base-images="images"
                                :base-zoomer-options="zoomOptions"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ItemGallery",
        data() {
            return {
                images: {
                    'thumbs':    // optional, if not present will use normal_size instead
                        [
                            {'id': '1', 'url': require('@/assets/img/1.png')},
                            {'id': '2', 'url': require('@/assets/img/2.png')},
                            {'id': '3', 'url': require('@/assets/img/1.png')},
                            {'id': '4', 'url': require('@/assets/img/2.png')},
                            {'id': '5', 'url': require('@/assets/img/1.png')},
                        ],
                    'normal_size':  // required
                        [
                            {'id': '1', 'url': require('@/assets/img/1.png')},
                            {'id': '2', 'url': require('@/assets/img/2.png')},
                            {'id': '3', 'url': require('@/assets/img/1.png')},
                            {'id': '4', 'url': require('@/assets/img/2.png')},
                            {'id': '5', 'url': require('@/assets/img/1.png')},
                        ]
                },
                zoomOptions: {
                    zoomFactor: 3,
                    pane: "container-round",
                    hoverDelay: 300,
                    namespace: "zoomer-left",
                    move_by_click: false,
                    scroll_items: 5,
                    choosed_thumb_border_color: "#dd2c00",
                    scroller_position: "left",
                    zoomer_pane_position: "right"
                }
            }
        },
        mounted() {
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped>

</style>