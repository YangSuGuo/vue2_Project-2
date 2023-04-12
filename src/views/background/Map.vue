<template>
    <div id="Map">
        <baidu-map
                :center="{lng: 104.072212, lat: 30.664461}"
                :scroll-wheel-zoom="true"
                :zoom=zoom
                auto-resize
                class="map"
                inertial-dragging="true"
                keyboard>
            <bm-scale anchor="BMAP_ANCHOR_TOP_LEFT" class="比例尺"></bm-scale><!--比例尺-->

            <bm-geolocation
                    :autoLocation="true"
                    :showAddressBar="true"
                    anchor="BMAP_ANCHOR_BOTTOM_RIGHT">
            </bm-geolocation><!--定位-->

            <bm-panorama></bm-panorama> <!--全景-->

            <bm-navigation></bm-navigation><!--缩放-->
        </baidu-map>
    </div>
</template>

<script>
export default {
    name: "Map",
    data() {
        return {
            zoom: "15",
        }
    }
}
</script>

<style scoped>
.map {
    width: 100%;
    height: 700px;
}
</style>