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
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>

<script>
    import Swiper from '../subcomponents/Swiper.vue'

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
        }
    }
</script>

<style scoped lang="scss">
    .goodsinfo-container{

        background-color: #eeeeee;
    }
</style>