import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import expressStaticGzip from 'express-static-gzip';


import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';

import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';


export const webpackDev = app => {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	const serverCompiler = compiler.compilers[1];

	/* eslint-disable-next-line */
	const webpackDevMiddleware = require('webpack-dev-middleware')(
		compiler,
		configDevClient.devServer
	);

	/* eslint-disable-next-line */
	const webpackHotMiddlware = require('webpack-hot-middleware')(
		clientCompiler,
		configDevClient.devServer
	);

	app.use(webpackDevMiddleware);
	app.use(webpackHotMiddlware);
	return app.use(webpackHotServerMiddleware(compiler));
};

export const webpackProd = app => {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const clientStats = stats.toJson().children[0];

		/* eslint-disable-next-line */
		const render = require('../../build/prod-server-bundle.js').default;
		console.log(
			stats.toString({
				colors: true,
			})
		);

		app.use(
			expressStaticGzip('dist', {
				enableBrotli: true,
			})
		);
		return app.use(render({ clientStats }));
	});
};
