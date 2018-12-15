<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in swipe" :key="index">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props:['swipe'],
    }
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
    .mint-swipe-item {

    }
    img {
        width: 100%;
        height: 100%;
    }
    }
</style>