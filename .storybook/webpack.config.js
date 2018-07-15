const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve("awesome-typescript-loader")
	});
	config.plugins.push(new TSDocgenPlugin());
	config.resolve.extensions.push(".ts", ".tsx");
	config.resolve.alias = {
		'@Styled': path.resolve(__dirname, '../src/universal/lib/styled/'),
		'@Redux': path.resolve(__dirname, '../src/universal/lib/redux/'),
		"@GraphQL": path.resolve(__dirname, '../src/universal/lib/graphql/'),
		'@Components': path.resolve(__dirname, '../src/universal/components/index.ts'),
		'@Containers': path.resolve(__dirname, '../src/universal/containers/index.ts'),
		'@API': path.resolve(__dirname, '../src/server/api/'),
	};

	return config;
};