const path = require('path');

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
		alias: {
			'@Styled': path.resolve(__dirname, '../src/universal/lib/styled/'),
			'@Redux': path.resolve(__dirname, '../src/universal/lib/redux/'),
			"@GraphQL": path.resolve(__dirname, '../src/universal/lib/graphql/'),
			'@Components': path.resolve(__dirname, '../src/universal/components/index.ts'),
			'@Containers': path.resolve(__dirname, '../src/universal/containers/index.ts'),
			'@API': path.resolve(__dirname, '../src/server/api/'),
		},
		extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', 'svg']
	}
};

module.exports = baseConfig;

