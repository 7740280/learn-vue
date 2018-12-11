<template>
    <div>
        <mt-button type="danger">123</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "App",
        data: function () {
            return {}
        },
        methods: {
            show: function () {
                Toast({
                    message: '提示',
                    position: 'top',
                    duration: 500
                });
            }
        }
    }
</script>

<style scoped>

</style>