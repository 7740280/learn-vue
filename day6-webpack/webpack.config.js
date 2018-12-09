const path = require('path')
//这个配置文件,其实就是一个就是一个JS文件,通过node中的模块操作,向外暴露了一个配置 对象
module.exports = {
    //指定入口文件,表示webpack要打包那个文件
    entry: path.join(__dirname, './src/main.js'),
    //输出文件相关的配置
    output: {
        //指定打包好的文件,输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        //指定输出的文件的名称
        filename: 'bundle.js'
    }
};


//当我们在控制台直接出入webpack命令执行发时候,webpack做了以下几步:
//1.首先,webpack发现我们并没有通过命令的形式给它指定入口和出口
//2.webpack就会去项目的根目录中,查找一个叫做webpack.config.js的配置文件
//3.当找到配置文件后,webpack会去解析执行这个配置文件,当解析执行完配置文件,就得到了配置文件中导出的配置对象
//4.当webpack拿到配置对象后,就拿到了配置对象中,指定的入口和出口,然后进行打包构建