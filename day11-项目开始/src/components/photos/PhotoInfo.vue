<template>
    <div class="info-container">
        <h3>{{imgInfo.title}}</h3>
        <div class="subtitle">
            <span>发表时间:{{imgInfo.created_at}}</span>
            <span>点击:{{imgInfo.time}}次</span>
        </div>
        <hr>

        <!--缩略图区域-->
        <div class="pre-view">
            <vue-preview :slides="imgList" :src="imgList.img_url" :msrc="imgList.img_msrc"></vue-preview>
        </div>
        <!--图片内容区域-->
        <div class="content">
            {{imgInfo.description}}
        </div>
        <!--评论子组件-->
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
    import Comment from '../comments/Comment.vue'

    export default {
        name: "PhotoInfo",
        data: function () {
            return {
                id: this.$route.params.id,
                imgInfo: [],
                imgList: [],
            }
        },
        methods: {
            getPhotoInfo() {
                this.$http.get('getImageInfo/' + this.id).then((result) => {
                    if (result.data.status === 0) {
                        this.imgInfo = result.data.data;
                    } else {

                    }
                })
            },
            getImgList: function () {
                this.$http.get('getImgList').then((result) => {
                    if (result.data.status === 0) {
                        this.imgList = result.data.data;
                    } else {

                    }
                })
            }
        },
        created: function () {
            this.getPhotoInfo();
            this.getImgList();
        },
        components: {
            'comment-box': Comment,
        }
    }
</script>

<style scoped lang="scss">
    .info-container {
        .pre-view {
            .my-gallery{
                img {
                    margin-left:-100px ;
                }
            }

        }

        padding: 0 10px;
        h3 {
            font-size: 17px;
            text-align: center;
            color: skyblue;
        }
        .subtitle {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            span:first-child {

            }
            span:last-child {

            }
        }
    }
</style>