<template>
    <div class="shopcar-container">
        <!--列表区域-->
        <div class="mui-card" v-for="(item,index) in goodslist" :key="index">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div class="info">
                        <!--从getters中获取是否勾选-->
                        <mt-switch
                                v-model="$store.getters.isSelected[item.id]"
                                @change="selectedChange(item.id,$store.getters.isSelected[item.id])"
                        >
                        </mt-switch>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=479086174,865595760&fm=200&gp=0.jpg">
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
                    <div class="settle-accounts">
                        <div>
                            <h4>总计(不含运费)</h4>
                            <p>已选购商品 <span>{{$store.getters.getAllGoodsPrice.number}}</span> 件,总价 <span>$ {{$store.getters.getAllGoodsPrice.amount}}</span>
                                元</p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
                    </div>
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
            remove: function (id, index) {
                this.goodslist.splice(index, 1);
                this.$store.commit('removeFromCar', id);
            },
            selectedChange: function (id, value) {
                //每当点击开关把最新的开关状态同步到store中
                this.$store.commit('updateGoodsSeleted', {id, selected: value});
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

        .settle-accounts {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                color: red;
            }
        }
    }
</style>