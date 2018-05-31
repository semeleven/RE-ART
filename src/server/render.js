import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { Provider as ReduxProvider } from 'react-redux';
import createStore from '../universal/lib/redux/store';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import { Helmet } from 'react-helmet';

import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Routes from '../universal/Routes.jsx';

export default ({ clientStats }) => async (req, res) => {
	const helmet = Helmet.renderStatic();

	const site = req.hostname.split('.')[0];
	const context = { site };

	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const client = new ApolloClient({
		ssrMode: true,
		link: createHttpLink({
			uri: 'http://localhost:4444',
			credentials: 'same-origin',
			headers: {
				cookie: req.header('Cookie'),
			},
		}),
		cache: new InMemoryCache(),
	});

	const { store } = createStore();

	const App = (
		<ApolloProvider client={client}>
			<ReduxProvider store={store}>
				<StaticRouter location={req.url} context={context}>
					<Routes />
				</StaticRouter>
			</ReduxProvider>
		</ApolloProvider>
	);

	await getDataFromTree(App).then(() => {
		const apolloState = client.extract();
		const reduxState = store.getState();

		return res.send(`
			<html ${helmet.htmlAttributes.toString()}>
				<head>
					${helmet.title.toString()}
	                ${helmet.meta.toString()}
	                ${helmet.link.toString()}
					${styles}
				</head>
	            <body ${helmet.bodyAttributes.toString()}>
	                <div id='react-root'>${renderToString(App)}</div>
					${js}
					<script 
						dangerouslySetInnerHTML={{
							__html: 
							\`window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(/</g, '\\\u003c')};\`,
							\`window.__REDUX_STATE__=${JSON.stringify(reduxState).replace(/</g, '\\\\\u003c')};\`,	
						}}
					/>
				</body>
			</html>
  		`);
	});
};
