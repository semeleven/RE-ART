const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			'webpack-hot-middleware/client?reload=true',
			'./src/index.js'
		]
	},
	mode: 'development',
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
				test : /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
				],
			},
			{
				test : /\.(ts|tsx)$/,
				use: [
					{ loader: 'babel-loader' },
					{ loader: 'awesome-typescript-loader' },
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png|gif|ttf|eot|woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						},
					},
				],
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', 'svg'],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				SERVER: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};