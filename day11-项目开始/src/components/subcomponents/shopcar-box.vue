<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number"
               @change="countChanged"
               :value="0"
               ref="numbox"
               readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    export default {
        name: "number-box",
        methods: {
            countChanged: function () {
                this.$store.commit('updateGoodsInfo', {
                    id: this.goodid,
                    count: this.$refs.numbox.value,
                })
            }
        },
        props: ['initcount', 'goodsid'],
    }
</script>

<style scoped>

</style>