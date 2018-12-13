<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="(item,index) in cates" :key="index"
                       :class="['mui-control-item',item.id == 0 ? 'mui-active' : '']"
                       href="#item1mobile"
                       data-wid="tab-top-subpage-1.html"
                       @click="getPhotoListByCategoryId(item.id)"
                    >
                        {{item.title}}
                    </a>
                </div>
            </div>

        </div>

        <!--图片列表区域-->
        <ul>
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item.img_url">
            </li>
        </ul>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    import {Toast} from 'mint-ui'

    export default {
        name: "PhotoList",
        created: function () {
            this.getAllcategory();
            this.getPhotoListByCategoryId(0);
        },
        mounted: function () {
            //当组件 中的DOM解构被渲染好并方法哦页面中,会执行这个钩子函数
            //如果要操作元素,最好在mounted里面
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005
            })
        },
        data: function () {
            return {
                cates: [],  //所有分类
                list: [],    //图片列表
            }
        },
        methods: {
            getAllcategory: function () {
                this.$http.get('/getAllCategory').then((result) => {
                    if (result.data.status === 0) {
                        result.data.data.unshift({id: 0, title: '全部'});
                        this.cates = result.data.data;
                    } else {
                        Toast('获取分类失败');
                    }
                })
            },
            getPhotoListByCategoryId: function (CateId) {
                this.$http.get('/getPhotoListByCategory/' + CateId).then((result) => {
                    if (result.data.status === 0) {
                        this.list = result.data.data.data;
                    } else {
                        Toast('获取图片失败');
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        /*屏蔽警告,chrome支持*/
        touch-action: pan-y;
    }

    img[lazy=loading] {
        width: 80% !important;
        height: 300px;
        margin: auto;
    }
</style>