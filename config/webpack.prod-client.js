
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const baseConfig = require('./webpack.base');

const config = {
	name: 'client',
	mode: 'production',
	entry: {
		vendor: [
			'react',
			'react-dom'
		],
		main: [
			'./src/index.js'
		]
	},
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
				test: /\.css$/,
				use: ['css-loader'],
			},
		]
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
		new LodashModuleReplacementPlugin,
	]
};

module.exports = merge(config, baseConfig);