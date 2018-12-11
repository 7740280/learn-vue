<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in swipe"><img :src="item.url" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "HomeContainer",
        data: function () {
            return {
                swipe: [],
            }
        },
        methods: {
            getSwipeList: function () {
                axios.get('http://vue-shop.com/getSwipeList')
                    .then((result) => {
                        if (result.data.status === 0) {
                            this.swipe = result.data.data;
                        }
                    }).catch((reject) => {

                })
            }
        },
        created: function () {
            this.getSwipeList();
        }
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