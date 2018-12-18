<template>
    <div class="shopcar-container">
        <!--列表区域-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">

                    <div class="info">
                        <mt-switch></mt-switch>
                        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=479086174,865595760&fm=200&gp=0.jpg" alt="">
                        <div>
                            <h4>标题</h4>
                            <span>$2199</span>
                            <ShopcarBox></ShopcarBox>
                            <a href="">删除</a>
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
    export default {
        name: "ShopcarContainer",
        components:{
            ShopcarBox,
        }
    }
</script>

<style scoped lang="scss">
    .shopcar-container{
        background-color: #eeeeee;
        overflow: hidden;
        .info{
            display: flex;
            justify-content: space-between;
            img {
                width: 60px;
                height: 60px;
            }

            span{
                color: red;
            }
        }
    }
</style>