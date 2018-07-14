const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const externals = require('./externals');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
	name: 'server',
	mode: 'development',
	target: 'node',
	externals,
	entry: [
		'./src/server/render.js',
	],
	output: {
		filename: 'dev-server-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
	devtool: 'inline-sourcemap',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}
			},
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				SERVER: true
			}
		}),
		new LodashModuleReplacementPlugin,
	]
};

module.exports = merge(baseConfig, config);