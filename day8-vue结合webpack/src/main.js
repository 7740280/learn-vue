//入口文件
//如何在webpack构建的项目中,使用vue进行开发

//在普通网页中使用vue:
//1.在Script标签,引入vue包
//2.在index.html创建一个div容器
//3.创建一个vue实例


//在webpack中使用vue:
//1.导入vue包
//注意:在webpack中,使用如下语句导入的vue构建函数,功能不完整,只提供了runtime-only的方式,并没有提供像网页中那样的使用方式
import Vue  from  "vue"


//回顾,包的查找规则:
//1.找项目根目录中有没有node_moduls中的文件夹
//2.在node_modules中根据包名,找到对应的vue文件夹
//3.在vue文件夹中,找一个叫做package.json的包配置 文件
//4.在package.json文件中,查找一个main属性[main属性指定了这个包在被加载的时候,的入口文件]
// import Vue from 'vue/dist/vue.js'

var vm = new Vue({
    el: '#app',
    data: {
        msg: 123
    }
});

