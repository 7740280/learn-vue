<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl"
                 class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        科技
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        name: "PhotoList",
        mounted: function () {
            //当组件 中的DOM解构被渲染好并方法哦页面中,会执行这个钩子函数
            //如果要操作元素,最好在mounted里面
            mui(".mui-scroll-wrapper").scroll({
                deceleration: 0.0005
            })
        }
    }
</script>

<style scoped lang="scss">
    * {
        /*屏蔽警告,chrome支持*/
        touch-action: pan-y;
    }
</style>