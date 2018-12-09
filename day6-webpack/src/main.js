//1.导入jqeury
//由于es6的代码太高级了,浏览器解析不了,所以执行一定会报错
import $ from 'jquery'
//使用import语法,导入css样式表,非js模块用import就行了
//注意:webpack ,默认只能打包处理JS类型的文件,无法处理其他的非JS 类型的文件.
//如果要处理非JS类型的文件,我们需要手动安装一些合适第三方loader加载器
//1.如果想要打包处理css文件,需要安装npm i style-loader css-loader -D 这两个loader
//2.打开webpack.config.js这个配置文件,在里面新增一个配置节点,叫做module ,它是一个对象,咋这个module对象上,有个rules属性,
//这个rules属性是个数组,这个数组中,存放了所有第三方文件的匹配和处理规则.
//import './css/index.css'

import './css/index.scss'

//注意:webpack  处理第三方文件类型的过程:
//1.发现这个要处理的文件不是JS文件 ,然后就去配置文件中查找有没有对应的第三方loader规则
//2.如果能找到对应的规则,就会调用对应的loader处理这种文件类型
//3.在调用loader的时候,是从后往前调用的
//4.当最后的 一个loader调用完毕,会把处理的结果交给webpack进行打包合并,最终输出到bundle.js中去

$(function () {
    $('li:odd').css('backgroundColor', 'yellow');
    $('li:even').css('backgroundColor', 'blue');
});


//经过刚才的演示,webpack可以做什么事情?
//1.webpack能够处理js文件的互相依赖关系
//2.webpack能处理JS的兼容问题,把高级的浏览器不能识别的语言,转为低级的,浏览器能够正常识别的语法


//使用wenpack-dev-server 这个工具,来实现呢自动打包编译的功能
//注意:webpack-dev-server这个工具,如果想要正常运行,要求在本地项目中,必须安装webpack(npm i webpack -D),但是安装webpack4会报错
//1.运行npm i webpack-dev-server -D来进行安装,
//2.安装完毕后,这个工具的用法和webpack的方法完全一样
//3.由于,我们是在项目中,本地安装的webpackdev-server,所以无法把它当做脚本命令,在终端中你那个直接运行
// (只有那些安装到全局 -g 的工具,才能在终端中正常执行). 所以可以在package.json文件的script中进行配置( "dev": "webpack-dev-server").

// "dev": "webpack-dev-server --open --port 8000 --contentBase src --hot"; 表示自动打开浏览器在8000端口,内容路径为src,并且热更新
