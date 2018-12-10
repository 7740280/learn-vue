import Vue from 'vue'

//1.导入vue-router
import VueRouter from 'vue-router'

//导入app组件
import app from './App.vue'

//导入account和goodslist组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

//导入account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

//2.手动安装VueRouter
Vue.use(VueRouter);

//3.创建路由对象
var router = new VueRouter({
    routes: [
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register},
            ]
        },
        {
            path: '/goodslist',
            component: goodslist,
        }
    ]
});


var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //render会把el指定的容器中所有内容都清空覆盖.
    // 所以不要把路由的router-link和router-view直接写到el锁控制的元素中
    router//将路由对象挂载到vm上
});

//app这个组件是通过vm实例的render函数渲染出来的,render函数如果渲染组件,渲染出来的组件,只能放到el:'#app'所指定的元素中
//account和goodslist组件是通过路由匹配箭筒到的,所以,这两个组件,只能展示到属于路由的router-view中去