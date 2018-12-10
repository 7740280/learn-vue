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

//注意:如果要通过路径的形式,去引入node_modules中相关的文件,可以直接省略路径前面的node_modules这一层,直接 写包的 名称,然后后面跟上具体的文件路径
import 'bootstrap/dist/css/bootstrap.css'
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

class Animal {
    static info = {
        name: 'jack',
        age: 20,
    }
}

console.log(Animal.info)

//在webpack 中默认只能处理一部分es6的新语法,一些更高级的es6或者es7语法,webpack是处理不了的.这时候就需要借助于第三方的loader,
// 来帮助webpack处理这些高级的语法,当第三方loader把高级语法转换为低级语法之后,会把结果交给webpack去打包到bundle.js中

//通过babel,可以帮我们将高级的语法转换为低级的语法
//1在webpack中,可以运行如下两套包,去安装babel相关的loader功能:
//1.1第一套包: npm i babel-core babel-loader babel-plugin-transform-runtime -D , 这套是babel的转换工具(转换器),能把高级语法转换为低级语法,但是它不知道怎么转换
//1.2第二套包: npm i babel-preset-env babel-preset-stage-0  -D  , 这套是语法,相当于字典

//2.打开webpack配置文件,在module节点下 的rules数组中,添加一个新的匹配规则:
//2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//2.2 注意:在配置babel的loader规则的时候,必须把node_modules目录,通过exclude选项排除掉:
//原因:
//  1.如果不排除node_modules ,则babel会把node_modules中所有的第三方JS文件 ,都打包编译,这样,会非常消耗CPU,同时,打包速度非常慢
//  2.哪怕,最终babel把所有node_modules中的JS转换完毕 , 但是,项目也无法正常运行

//3.在项目的根目录中,新建一个叫做 .babelrc的babel配置文件,这个配置文件,属于json格式,所以,在写.babelrc 配置的时候,必须符合JSON语法规范,不能写注释,字符串那必须用双引号
//3.1 在.babelrc中写如下的配置:
// {
//     "presets":[
//       "env","stage-0"
// ],
//     "plugins":[
//         "transform-runtime"
//      ]
// }

//4.目前我们 安装的babel-preset-env是比较新的es语法插件,它包含了所有和es***相关的语法之前装的是 babel-preset-es2015. 