
//1.导入jqeury
//由于es6的代码太高级了,浏览器解析不了,所以执行一定会报错
import  $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColor','yellow');
    $('li:even').css('backgroundColor','blue');
});


//经过刚才的演示,webpack可以做什么事情?
//1.webpack能够处理js文件的互相依赖关系
//2.webpack能处理JS的兼容问题,把高级的浏览器不能识别的语言,转为低级的,浏览器能够正常识别的语法
