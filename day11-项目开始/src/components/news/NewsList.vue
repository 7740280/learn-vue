<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情,可是，打呼噜怎么办？</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:</span>
                            <span>点击:0次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NewsList"
    }
</script>

<style scoped lang="scss">
    .mui-table-view-cell {
        p:first-child {
            color: black;
        }
        .mui-ellipsis {
            display: flex;
            justify-content: space-between;
        }
    }
</style>