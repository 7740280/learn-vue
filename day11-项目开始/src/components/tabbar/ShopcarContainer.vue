<template>
    <div class="shopcar-container">
        <!--列表区域-->
        <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="info">
                        <mt-switch></mt-switch>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=479086174,865595760&fm=200&gp=0.jpg"
                             alt="">
                        <div>
                            <h4>{{item.title}}</h4>
                            <span>${{item.sell_price}}</span>
                            <ShopcarBox :count="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></ShopcarBox>
                            <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--结算区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopcarBox from '../subcomponents/shopcar-box.vue'
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        name: "ShopcarContainer",
        data: function () {
            return {
                goodslist: [],
            };
        },
        created: function () {
            this.getGoodsList();
        },
        mounted: function () {
            mui('.mui-numbox').numbox();
        },
        methods: {
            getGoodsList: function () {
                //获取到car中所有商品的id
                var ids = [];
                this.$store.state.car.forEach(item => ids.push(item.id));
                //购物车没有商品,则直接返回,不需要请求接口
                if (ids.length <= 0) {
                    return;
                }

                this.$http.get('/goods/getShopcarList/?ids=' + ids.join()).then((result) => {
                    if (result.data.status === 0) {
                        this.goodslist = result.data.data;
                    }
                })
            },
            //将商品从store中删除
            remove: function (id,index) {
                this.goodslist.splice(index,1);
                this.$store.commit('removeFromCar',id);
            }
        },
        components: {
            ShopcarBox,
        }
    }
</script>

<style scoped lang="scss">
    .shopcar-container {
        background-color: #eeeeee;
        overflow: hidden;
        .info {
            display: flex;
            justify-content: space-between;
            img {
                width: 60px;
                height: 60px;
            }

            span {
                color: red;
            }
        }
    }
</style>