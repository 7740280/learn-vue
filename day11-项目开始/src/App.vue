<template>
    <div class="app-container">
        <!--顶部header区域-->
        <mt-header fixed title="商城">
            <span slot="left" v-if="flag">
                <mt-button icon="back" @click="back">返回</mt-button>
            </span>
        </mt-header>

        <!--路由router-view区域-->
        <transition>
            <router-view></router-view>
        </transition>

        <!--底部tabbar区域-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-lzj" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-lzj" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-lzj" to="car">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.getAllCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-lzj" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                flag: false,
            }
        },
        created: function () {
            this.flag = this.$route.path === '/home' ? false : true;
        },
        methods: {
            //点击后退
            back: function () {
                this.$router.go(-1);
            }
        },
        watch: {
            '$route.path': function (newVal) {
                console.log(newVal);
                if (newVal === '/home') {
                    this.flag = false
                } else {
                    this.flag = true;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .app-container {
        padding-top: 40px;
        /*防止出现x轴的滚动条*/
        overflow-x: hidden;
        padding-bottom: 50px;
    }

    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }

    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }

    .v-enter-active,
    .v-leave-active {
        transition: all .4s ease;
    }

    .mint-header {
        z-index: 1000;
    }

    .mui-bar-tab .mui-tab-item-lzj.mui-active {
        color: #007aff;
    }

    .mui-bar-tab .mui-tab-item-lzj {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }

    .mui-bar-tab .mui-tab-item-lzj .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }

    .mui-bar-tab .mui-tab-item-lzj .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>