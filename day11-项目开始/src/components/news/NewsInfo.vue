<template>
    <div class="info-container">
        <div class="title"> {{info.title}}</div>
        <div class="sub-title">
            <span>发表时间:{{info.created_at}}</span>
            <span>点击次数:{{info.click}}</span>
        </div>
        <hr>
        <div class="content">
            {{info.content}}
        </div>
        <comment-box :comment-id="id"></comment-box>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    //导入子组件
    import Comment from '../comments/Comment.vue'

    export default {
        name: "NewsInfo",
        data: function () {
            return {
                id: this.$route.params.id,
                info: [],
            }
        },
        methods: {
            getNewsInfo: function () {
                this.$http.get('/getNewsInfo/' + this.id)
                    .then((result) => {
                        if (result.data.status == 0) {
                            this.info = result.data.data;
                        } else {
                            Toast('获取新闻详情失败');
                        }
                    })
            }
        },
        created: function () {
            this.getNewsInfo();
        },
        components: {
            'comment-box': Comment,
        }
    }
</script>

<style scoped lang="scss">
    .info-container {
        padding: 0px 10px;
        .title {
            text-align: center;
            color: #666;
        }
        .sub-title {
            color: skyblue;
            padding-top: 5px;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
        .content {
            color: #888;
        }
    }
</style>