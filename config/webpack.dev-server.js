const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'development',
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
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[ext]',
							emitFile: false
						}
					}
				]
			},
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		}),
	]
};