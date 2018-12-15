<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544872975812&di=6da805d35f1277bc17a34491ffc86f9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F810a19d8bc3eb135998878a6ac1ea8d3fd1f4464.jpg"
                 alt="">
            <div class="title">
                <h4>iphone x</h4>
                <div class="info">
                    <p class="price">
                        <span>$899</span>
                        <span>$1088</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544872975812&di=6da805d35f1277bc17a34491ffc86f9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F810a19d8bc3eb135998878a6ac1ea8d3fd1f4464.jpg"
                 alt="">
            <div class="title">
                <h4>iphone x</h4>
                <div class="info">
                    <p class="price">
                        <span>$899</span>
                        <span>$1088</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544872975812&di=6da805d35f1277bc17a34491ffc86f9a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F810a19d8bc3eb135998878a6ac1ea8d3fd1f4464.jpg"
                 alt="">
            <div class="title">
                <h4>iphone xiphone xiphone xiphone xiphone xiphone xiphone xiphone x</h4>
                <div class="info">
                    <p class="price">
                        <span>$899</span>
                        <span>$1088</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩余60件</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList"
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
    }
</style>