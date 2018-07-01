
const path = require('path');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

module.exports = {
	name: 'client',
	entry: {
		vendor: [
			'react',
			'react-dom'
		],
		main: [
			'./src/index.js'
		]
	},
	mode: 'production',
	output: {
		filename: '[name]-bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
				],
			},
			{
				test : /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader'
			},
			{
				test: /\.css$/,
				use: ['css-loader'],
			},
			{
				test: /\.(jpg|png|gif|ttf|svg|eot|woff|woff2)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'images/[name].[ext]'
						},
					},
				],
			},
		]
	},
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', 'svg'],
	},
	plugins: [
		new OptimizeCssAssetsPlugin({
			assetNameRegExp: /\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorOptions: { discardComments: { removeAll: true } },
			canPrint: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
				SERVER: false
			}
		}),
		new UglifyJSPlugin(),
		new CompressionPlugin({
			algorithm: 'gzip'
		}),
		new BrotliPlugin(),
	]
}