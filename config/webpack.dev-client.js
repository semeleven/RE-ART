const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
	name: 'client',
	mode: 'development',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client?reload=true',
			'./src/index.js'
		]
	},
	output: {
		filename: '[name]-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	devServer: {
		contentBase: 'dist',
		overlay: true,
		hot: true,
		stats: {
			colors: true
		},
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				SERVER: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new LodashModuleReplacementPlugin,
	]
};

module.exports = merge(baseConfig, config);