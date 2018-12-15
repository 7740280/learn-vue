<template>
    <div class="goodsinfo-container">
        <!--轮播图区域-->

        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <swiper :swipe="goodsinfo" :isfull="false"></swiper>
            </div>
        </div>

        <!--购买商品区域-->
        <div class="mui-card">
            <div class="mui-card-header">标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>$2399</del>&nbsp;&nbsp;&nbsp;
                        销售价: <span>$1999</span>
                    </p>
                    <div class="buy">
                        <p>购买数量:
                            <NumberBox></NumberBox>
                        </p>
                    </div>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <!--<div class="mui-card-footer">页脚</div>-->
        </div>

        <!--购买商品区域-->
        <div class="mui-card">
            <div class="mui-card-header">标题</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    彻底弄懂css中单位px和em,rem的区别 - leejersey - 博客园彻底弄懂css中单位px和em,rem的区别 - leejersey -
                    博客园彻底弄懂css中单位px和em,rem的区别 - leejersey - 博客园彻底弄懂css中单位px和em,rem的区别 - leejersey -
                    博客园彻底弄懂css中单位px和em,rem的区别 - leejersey - 博客园彻底弄懂css中单位px和em,rem的区别 - leejersey -
                    博客园彻底弄懂css中单位px和em,rem的区别 - leejersey - 博客园
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../subcomponents/Swiper.vue'
    import NumberBox from '../subcomponents/number-box.vue'
    import mui from '../../lib/mui/js/mui.min.js'
    
    export default {
        name: "GoodsInfo",
        data: function () {
            return {
                id: this.$route.params.id,
                goodsinfo: {},
            };
        },
        methods: {
            getGoodsInfo: function () {
                this.$http.get('/getSwipeList').then((result) => {
                    if (result.data.status === 0) {
                        result.data.data.forEach(item => {
                            item.img_url = item.img_url;
                        });
                        this.goodsinfo = result.data.data;
                    }
                })
            }
        },
        created: function () {
            this.getGoodsInfo();
        },
        components: {
            swiper: Swiper,
            NumberBox,
        },
        mounted: function () {
            mui('.mui-numbox').numbox();
        }
    }
</script>

<style scoped lang="scss">
    .goodsinfo-container {
        background-color: #eeeeee;
        .price {
            span {
                color: red;
            }
        }
        .buy {
            margin-bottom: 10px;
        }
    }
</style>