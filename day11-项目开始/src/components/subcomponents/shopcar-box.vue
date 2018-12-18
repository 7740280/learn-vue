<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number"
               :value="count"
               @change="countChanged"
               ref="numbox"
               readonly
        />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        methods: {
            countChanged: function () {
                this.$store.commit('updateGoodsInfo', {
                    id: this.goodsid,
                    count: this.$refs.numbox.value,
                })
            },

        },
        props: ['count', 'goodsid'],

        mounted: function () {
            mui('.mui-numbox').numbox();
        },
    }
</script>

<style scoped>

</style>