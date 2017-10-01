const path = require('path');
//　const uglify = require('uglifyjs-webpack-plugin');//引入压缩JS代码插件　　不建议在开发环境下启用JS压缩
const htmlPlugin= require('html-webpack-plugin');

module.exports={
	//入口文件的配置项
	entry:{
		//里面的entery是可以随便写的
		entry:'./src/entery.js'
	},
	//出口文件的配置项
	output:{
		//打包的路径文职
		path:path.resolve(__dirname,'dist'),//获取了项目的绝对路径
		//打包的文件名称
		filename:'bundle.js'
	},
	//模块：例如解读CSS,图片如何转换，压缩
	module:{
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	//插件，用于生产模版和各项功能
	plugins:[
		//new uglify()//不建议在开发环境下启用JS压缩
		new htmlPlugin({
			minify:{
				// 是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
				removeAttributeQuotes:true
			},
			// 为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
			hash:true,
			// 是要打包的html模版路径和文件名称。
			template:'./src/index.html'

		})
	],
	//配置webpack开发服务功能
	devServer:{
		//设置基本目录结构
		contentBase:path.resolve(__dirname,'dist'),
		//服务器的IP地址，可以使用IP也可以使用localhost
		host:'localhost',
		//服务端压缩是否开启
		compress:true,
		//配置服务端口号
		port:8080
	}
};