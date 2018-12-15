<template>
    <div>
        <swiper :swipe="swipe"></swiper>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/newslist">
                        <img src="../../images/menu1.png" alt="">
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/photolist">
                        <img src="../../images/menu2.png" alt="">
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodslist">
                        <img src="../../images/menu3.png" alt="">
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <img src="../../images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <img src="../../images/menu5.png" alt="">
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <img src="../../images/menu6.png" alt="">
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    import Swiper from '../subcomponents/Swiper.vue'

    export default {
        name: "HomeContainer",
        data: function () {
            return {
                swipe: [],
            }
        },
        methods: {
            getSwipeList: function () {
                this.$http.get('/getSwipeList')
                    .then((result) => {
                        if (result.data.status === 0) {
                            this.swipe = result.data.data;
                        } else {
                            Toast('加载轮播图失败...');
                        }
                    }).catch((reject) => {
                    //TODO
                })
            }
        },
        created: function () {
            this.getSwipeList();
        },
        components: {
            swiper: Swiper,
        }
    }
</script>

<style scoped lang="scss">


    .mui-grid-view.mui-grid-9 {
        margin-top: 0;
        background-color: #fff;
        img {
            width: 50%;
        }

    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0px;
    }
</style>