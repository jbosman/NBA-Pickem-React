const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [ 'style-loader', 'css-loader' ],
				test: /\.css$/
			},
			{
				test: /\.(jpe?g|svg|png)$/,
				use: [ 
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					}, 
					'image-webpack-loader' 
				]
			}
		]
	}
}