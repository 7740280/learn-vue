<template>
    <div class="comment-container">
        <h4>发表评论:</h4>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="说点什么吧..." v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,index) in comments" :key="index">
            <div class="cmt-item">
                <div class="cmt-title">
                    <span>第{{index + 1}}楼</span>
                    <span>用户:  {{item.name}}</span>
                    <span>发表时间:{{item.created_at | dateFormat}}</span>
                </div>
                <div class="cmt-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
    </div>

</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "Comment",
        props: ['commentId'],
        data: function () {
            return {
                comments: [],
                pageIndex: 1, //默认返回第一页数据
                msg: ''
            }
        },
        methods: {
            getComment: function () {
                this.$http.get('/newsinfo/' + this.commentId + '/getComments?page=' + this.pageIndex)
                    .then((result) => {
                        if (result.data.status === 0) {
                            this.comments = this.comments.concat(result.data.data.data);
                        } else {
                            Toast('获取评论失败');
                        }
                    })
            },
            postComment: function () {
                if (this.msg.trim().length === 0) {
                    return Toast('评论内容不能为空');
                }

                this.$http.post('/postComment/' + this.$route.params.id, {
                    msg: this.msg
                }).then((result) => {
                    if (result.data.status === 0) {
                        this.comments.unshift({
                            name: 'jack',
                            content: this.msg.trim(),
                            created_at: new Date(),
                        });
                        this.msg = '';

                        Toast('发表成功');
                    } else {
                        Toast('发表评论失败');
                    }
                })
            },
            more: function () {
                this.pageIndex++;
                this.getComment();
            }
        },
        created: function () {
            this.getComment();
        }
    }
</script>

<style scoped lang="scss">
    .comment-container {
        padding-top: 15px;
        textarea {
            height: 100px;
        }
        .cmt-item {
            border: 1px solid #007aff;
            border-radius: 5px;
            margin-top: 10px;
            .cmt-title {
                background-color: #888;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
            .cmt-content {
                font-size: 10px;
                padding: 5px;
                text-indent: 2em;
            }
        }

        .mint-button {
            margin: 20px 0;
        }
    }
</style>