const baseConfig = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
				],
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					{loader: 'babel-loader'},
					{loader: 'awesome-typescript-loader'},
				],
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
		],
	},
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', 'svg'],
	},
};

module.exports = baseConfig;

