<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in newList" :key="index">
                <router-link to="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis'>{{item.title}}</p>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.created_at | dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "NewsList",
        data: function () {
            return {
                newList: [],
            }
        },
        created: function () {
            this.getNewsList();
        },
        methods: {
            getNewsList: function () {
                this.$http.get('/getNewsList')
                    .then((result) => {
                        if (result.data.status == 0) {
                            console.log(result.data.data);
                            this.newList = result.data.data;
                        } else {
                            Toast('图片加载失败...')
                        }
                    })
            }
        }
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