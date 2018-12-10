const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
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
    },
    //这是配置dev-server命令参数的第二种形式,相对来说,这种方式麻烦一点
    devServer: {
        // --open --port 8000 --contentBase src --hot
        // open: true,  //打开浏览器
        port: 8080,  //指定端口
        contentBase: 'src',  //指定托管目录
        hot: true,        //启动热更新,第一步
    },
    //配置插件阶段
    plugins: [ //第二步
        new webpack.HotModuleReplacementPlugin(), //第三步
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定 模板页面 ,将来会根据模板页面路径,去生成内存中的页面
            filename: 'index.html' //指定生成的页面的名称
        }),
    ],
    //这个节点,用于配置所有第三方模块加载器
    module: {
        //所有第三方模块的匹配规则
        rules: [
            {
                //test是正则匹配
                test: /\.css$/,
                use: [
                    //调用的时候先调用下面的,把结果交给上面的loader来处理,如果前面没有,则交给webpack
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                //配置处理sass
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                //npm i url-loader file-loader -D
                //它默认把图片转成base64的
                //配置处理图片和字体
                test: /\.(jpg|png|jif|bmp|jpeg)/,
                //limit限制图片的大小,字节为单位,当图片大于或等于给定的大小就不转成base64编码,如果图片小于给定的值,就会被转为base64的编码字符串.
                // 但是它会为我们图片的名称进行修改,是为了防止命名冲突,可以通过name=[name].[ext]阻止改名,改后缀名,但是不建议这么做
                //如果不希望名字呗改变,又怕有重名,可以在前面指定hash值的位数
                use: 'url-loader?limit=95000&name=[hash:8]-[name].[ext]',

            },
            //处理字体文件
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: 'url-loader'
            },
            //配置babel来转换高级的JS语法
            {
                test: /\.js$/,
                use: 'babel-loader', exclude: /node_modules/ //排除node_modules
            }
        ]

    },
    resolve: {
        alias: {
            //设置vue被导入时候包的路径
            "vue$": 'vue/dist/vue.js'
        }
    }
};


//当我们在控制台直接出入webpack命令执行发时候,webpack做了以下几步:
//1.首先,webpack发现我们并没有通过命令的形式给它指定入口和出口
//2.webpack就会去项目的根目录中,查找一个叫做webpack.config.js的配置文件
//3.当找到配置文件后,webpack会去解析执行这个配置文件,当解析执行完配置文件,就得到了配置文件中导出的配置对象
//4.当webpack拿到配置对象后,就拿到了配置对象中,指定的入口和出口,然后进行打包构建
//5.webpack-dev-server帮我们打包生成的bundle.js并没有存放到实际的物理磁盘上,而是直接托管到了电脑的内存中,所以,我们在项目中,根本找不到这个打包好的bundle.js
//6.我们 可以认为webpack-dev-server把打包好的文件,以一种虚拟的形式,托管到了咱们项目的根目录中.虽然我们看不到它,但是可以认为和wdist ,src,node_module平级,有一个看不见的文件.叫做bundle.js