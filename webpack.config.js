var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.join(__dirname,'node_modules');

var config = {
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:3000',
		'webpack/hot/only-dev-server',
		'./web/js/base.js',
	],
	output: {
		path: path.join(__dirname, 'web/dist'),
		filename: 'bundle.js',
		publicPath: 'http://127.0.0.1:3000/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react','es2015','stage-0'],
					plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy']
				}
			}
		]
	}
};

module.exports = config;