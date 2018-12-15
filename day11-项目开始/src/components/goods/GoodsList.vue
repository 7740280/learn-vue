<template>
    <div class="goods-list">
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index" tag="div" @click="goDetail(item.id)">
            <img :src="item.img_url" alt="">
            <div class="title">
                <h4>{{item.title}}</h4>
                <div class="info">
                    <p class="price">
                        <span>原价:${{item.sell_price}}</span>
                        <span>现价:${{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余:{{item.stock_quantity}}</span>
                    </p>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "GoodsList",
        data: function () {
            return {
                page: 1,
                goodslist: [],
            };
        },
        methods: {
            getGoodsList: function () {
                this.$http.get('/getGoodsList?page=' + this.page).then((result) => {
                    if (result.data.status === 0) {
                        this.goodslist = this.goodslist.concat(result.data.data.data);
                    }
                })
            },
            more: function () {
                this.page++;
                this.getGoodsList();
                Toast('加载成功')
            },
            goDetail: function (id) {
                //编程式导航
                //path 不能和params 一起使用,否则params会被忽略
                this.$router.push({name: 'goodsinfo', params: {id}});
            }
        },
        created: function () {
            this.getGoodsList();
        }
    }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        display: flex;
        padding: 0 5px;
        justify-content: space-between;
        .goods-item {
            width: 48%;
            margin-top: 5px;
            img {
                width: 100%;
            }
            box-shadow: 0 0 3px rgba(0, 0, 0, .6);

            .title {
                .info {
                    background-color: #eee;
                    color: #fff;
                    display: flex;
                    justify-content: space-between;

                }
            }
        }

        .mint-button {
            margin-top: 10px;
        }
    }
</style>