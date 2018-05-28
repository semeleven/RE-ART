const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'client',
	entry: {
		vendor: ['react', 'react-dom'],
		main: [
			'react-hot-loader/patch',
			// 'babel-runtime/regenerator',
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
				// test: /\.jsx?$/,
				test : /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						},
					},
				],
			},
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				WEBPACK: true
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
};