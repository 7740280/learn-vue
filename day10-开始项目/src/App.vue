<template>
    <div>
       <mt-button type="danger">123</mt-button>
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