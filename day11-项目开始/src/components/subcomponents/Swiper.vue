<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in swipe" :key="index">
                <img :src="item.img_url" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props: ['swipe', 'isfull'],
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        text-align: center;
        height: 200px;
        .mint-swipe-item {

        }
        img {
            height: 100%;
        }
    }

    .full{
        width: 100%;
    }
</style>