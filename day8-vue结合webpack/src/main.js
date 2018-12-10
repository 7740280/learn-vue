//入口文件
//如何在webpack构建的项目中,使用vue进行开发

//在普通网页中使用vue:
//1.在Script标签,引入vue包
//2.在index.html创建一个div容器
//3.创建一个vue实例


//在webpack中使用vue:
//1.导入vue包
//注意:在webpack中,使用如下语句导入的vue构建函数,功能不完整,只提供了runtime-only的方式,并没有提供像网页中那样的使用方式
import Vue from "vue"


//回顾,包的查找规则:
//1.找项目根目录中有没有node_moduls中的文件夹
//2.在node_modules中根据包名,找到对应的vue文件夹
//3.在vue文件夹中,找一个叫做package.json的包配置 文件
//4.在package.json文件中,查找一个main属性[main属性指定了这个包在被加载的时候,的入口文件]
// import Vue from 'vue/dist/vue.js'

//1.导入login组件
import login from './login.vue'
//默认,webpack无法打包.vue文件,需要安装相关的loader
//npm i vue-loader vue-template-compiler -D
//在配置文件中,新增loader配置项

var vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    },
    compoents: {
        login
    },
    // render: function (createElements) {
    //     //在webpack中,如果想要通过蹙额,把一个组件放到页面中去展示,vm实例中的render函数可以实现
    //     return createElements(login)
    // }
    // 简写方式
    render: c => c(login)
});

//总结梳理:Webpack中如何使用vue:
//1.安装vue的包,npm i vue -S
//2.由于在webpack中推荐使用.vue这个组件模板文件定义组件,所以,需要安装能解析 这种文件的loader: npm i vue-loader vue-template-compiler -D
//3.在main.js中导入vue模块, import Vue from 'vue'
//4.定义一个.vue结果的组件
//5.使用import导入组件
//6.创建vm的实例
//7.在页面中创建一个id为app的div元素,作为vm实例要控制的区域

