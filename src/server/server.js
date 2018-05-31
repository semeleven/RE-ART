import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import expressStaticGzip from 'express-static-gzip';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import signale from 'signale';

import configDevClient from '../../config/webpack.dev-client.js';
import configDevServer from '../../config/webpack.dev-server.js';
import configProdClient from '../../config/webpack.prod-client.js';
import configProdServer from '../../config/webpack.prod-server.js';

import schema from '../universal/lib/graphql/schema';

const app = express();

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 8080;

let isBuilt = false;

const done = () => {
	if (!isBuilt) {
		return app.listen(PORT, () => {
			isBuilt = true;
			signale.success(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`);
		});
	}
};

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	// const serverCompiler = compiler.compilers[1];

	/* eslint-disable-next-line */
	const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);

	/* eslint-disable-next-line */
	const webpackHotMiddlware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);

	app.use(webpackDevMiddleware);
	app.use(webpackHotMiddlware);
	app.use(webpackHotServerMiddleware(compiler));
	signale.success('Middleware enabled');
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

		app.use(
			expressStaticGzip('dist', {
				enableBrotli: true,
			})
		);
		app.use(render({ clientStats }));
		return done();
	});
}
