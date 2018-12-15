<template>
    <div>
        哈哈
    </div>
</template>

<script>
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
                this.$http.get('/getGoodsInfo/' + this.id).then((result) => {
                    if (result.data.status === 0) {
                        this.goodsinfo = result.data.data;
                    }
                })
            }
        },
        created: function () {
            this.getGoodsInfo();
        }
    }
</script>

<style scoped>

</style>