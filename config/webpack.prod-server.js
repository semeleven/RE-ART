const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	externals: [nodeExternals()],
	entry: [
		'./src/server/render.js',
	],
	mode: 'production',
	output: {
		filename: 'prod-server-bundle.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
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
				test : /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.(jpg|png|gif|ttf|svg|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
							emitFile: false
						}
					}
				]
			},
		]
	},
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', 'svg'],
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
	]
}