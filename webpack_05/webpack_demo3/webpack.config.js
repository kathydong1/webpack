module.exports={
	// 项目入口文件
	entry:"./entry.js",
	//输出文件
	output:{
		// 输出文件所在的文件夹
		path:__dirname+"/bundle",
		//输出的文件
		filename:"bundle.js"
	},
	module:{
		// webpack2.0以上module.loaders
		rules:[
			// 解析css的loader配置
			{test:/\.css$/,loader:'style-loader!css-loader'},
			//解析scss loader
			{
			 test:/\.scss$/,
			 use:[
				 {loader:"style-loader"},
				 {loader:"css-loader"},
				 {loader:"sass-loader"}
			 ]
			},
			 { test: /\.js$/, loader: "babel-loader" },
			{
			test: /\.vue$/,
			use: [{
			    loader: 'vue-loader',
			    options: {
			        loaders: {
			            js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
			            css: 'vue-style-loader!css-loader'
			        }
			    }
			}],
			}
		]
	}

}
/*console.log(__dirname);
C:\Users\Mhy\Desktop\webpack_05
*/