const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
//para configurar necesitamos exportar un objeto
module.exports = {
	//tiene una entrada, el primer archivoa a traducir
	entry:'./src/app/main.js',
	//luego lo colacamos en otro lado de la siguiente manera
	output:{
		//direccion de las carpetas
		path:path.join(__dirname,'src/public/js'),
		//nombre del archivo
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
			},
			{
				test: /\.vue$/,
				exclude:/node_modules/,
				use:{
					loader:'vue-loader'
				}
			}
		]
	},
	 plugins: [
    new VueLoaderPlugin()
  ]

};