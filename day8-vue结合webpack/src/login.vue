<template>
    <div>
        <input type="button" value="点击" @click="show">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
    //ES6中向外暴露成员的方式,export default 向外暴露的成员可以用任何变量名来进行接收
    //在一个 模块中指允许export default向外暴露一次
    export default {
        data: function () {
            return {
                msg: 'jack'
            }
        },
        methods: {
            show: function () {
                console.log('show');
            }
        }
    }
</script>

<style>

</style>