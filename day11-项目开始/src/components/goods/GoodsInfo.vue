<template>
    <div class="goodsinfo-container">
        <!--轮播图区域-->

        <transition
                @beforeEnter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
        >
            <div v-show="isShow" class="ball"></div>
        </transition>


        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <swiper :swipe="swiper" :isfull="false"></swiper>
            </div>
        </div>

        <!--购买商品区域-->
        <div class="mui-card">

            <div class="mui-card-header">{{goodsinfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:
                        <del>${{goodsinfo.market_price}}</del>&nbsp;&nbsp;&nbsp;
                        销售价: <span>${{goodsinfo.sell_price}}</span>
                    </p>
                    <div class="buy">
                        <p>购买数量:
                            <NumberBox></NumberBox>
                        </p>
                    </div>

                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addCart">加入购物车</mt-button>

                </div>
            </div>
            <!--<div class="mui-card-footer">页脚</div>-->
        </div>

        <!--购买商品区域-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{goodsinfo.id}}</p>
                    <p>库存情况:{{goodsinfo.stock_quantity}}</p>
                    <p>上架时间:{{goodsinfo.created_at}}</p>
                </div>
            </div>

            <mt-button type="primary" size="large" plain @click="goGoodsDesc(id)">商品详情</mt-button>
            <mt-button type="danger" size="large" plain>参与评论</mt-button>
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
                swiper: {},
                isShow: false,
            };
        },
        methods: {
            getSwiper: function () {
                this.$http.get('/getSwipeList').then((result) => {
                    if (result.data.status === 0) {
                        result.data.data.forEach(item => {
                            item.img_url = item.img_url;
                        });
                        this.swiper = result.data.data;
                    }
                })
            },
            getGoodsInfo: function () {
                this.$http.get('getGoodsInfo/' + this.id).then((result) => {
                    if (result.data.status === 0) {
                        this.goodsinfo = result.data.data;
                    }
                })
            },
            goGoodsDesc: function (id) {
                this.$router.push({name: 'goodsdesc', params: {id}});
            },
            addCart: function () {
                this.isShow = !this.isShow;
            },
            beforeEnter: function (el) {
                el.style.transform = "translate(0,0)";
            },
            enter: function (el, done) {
                el.offsetWidth;
                el.style.transform = "translate(92px,240px)";
                el.style.transition = 'all 1s ease';
                done();
            },
            afterEnter: function (el) {
                this.isShow = !this.isShow;
            }
        },
        created: function () {
            this.getSwiper();
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

        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: pink;
            top: 380px;
            left: 146px;
            position: absolute;
            z-index: 99;
        }

        .price {
            span {
                color: red;
            }
        }
        .buy {
            margin-bottom: 10px;
        }

        .mui-card {
            padding: 0px 5px;
            button {
                margin: 15px 0;
            }
        }
    }
</style>