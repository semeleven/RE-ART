const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const externals = require('./externals');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
	name: 'server',
	mode: 'production',
	target: 'node',
	externals,
	entry: [
		'./src/server/render.js',
	],
	output: {
		filename: 'prod-server-bundle.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'css-loader'
			},
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				SERVER: true
			}
		}),
		new LodashModuleReplacementPlugin,
	]
};

module.exports = merge(config, baseConfig);