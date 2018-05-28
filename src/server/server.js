import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';
import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';

const server = express();

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 8080;

let isBuilt = false;

const done = () => {
	if (!isBuilt) {
		return server.listen(PORT, () => {
			isBuilt = true;
			console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`);
		});
	}
};

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	// const serverCompiler = compiler.compilers[1];

	/* eslint-disable-next-line */
	const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);

	/* eslint-disable-next-line */
	const webpackHotMiddlware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);

	server.use(webpackDevMiddleware);
	server.use(webpackHotMiddlware);
	server.use(webpackHotServerMiddleware(compiler));
	console.log('Middleware enabled');
	done();
} else {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const clientStats = stats.toJson().children[0];

		/* eslint-disable-next-line */
		const render = require('../../build/prod-server-bundle.js').default;
		console.log(
			stats.toString({
				colors: true,
			})
		);

		server.use(
			expressStaticGzip('dist', {
				enableBrotli: true,
			})
		);
		server.use(render({ clientStats }));
		return done();
	});
}
