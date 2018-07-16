import 'isomorphic-fetch';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import chalk from 'chalk';
import boxen from 'boxen';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
console.log(process.env, 'ENV!');

import schema from '../universal/lib/graphql/schema';

const app = express();

const corsOptions = {
	// temporary
	origin: process.env.HOST,
	credentials: true,
};
app.use(cors(corsOptions));

app.use(morgan('dev'));

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 8080;

const message = chalk.white.bold.bgRed(
	`Running RE-ART on :${PORT} in ${process.env.NODE_ENV} \n\n`
);

let isBuilt = false;

const done = () => {
	if (isBuilt) return;

	return app.listen(PORT, () => {
		isBuilt = true;
		return console.log(
			boxen(message, {
				borderColor: 'red',
				padding: 3,
				margin: 3,
				backgroundColor: 'black',
				align: 'left',
			})
		);
	});
};

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

if (isDev) {
	// eslint-disable-next-line
	require('./compileWebpack').webpackDev(app);
	done();
} else {
	// eslint-disable-next-line
	require('./compileWebpack').webpackProd(app);
	done();
}
