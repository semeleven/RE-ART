import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { Provider as ReduxProvider } from 'react-redux';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import { Helmet } from 'react-helmet';

import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ServerStyleSheet, injectGlobal } from 'styled-components';
import globalStyles from '../injectGlobal';
import { ThemeProvider } from '../universal/lib/styled';
import { colors } from '../universal/lib/styled/theme';

import createStore from '../universal/lib/redux/store';

import AppRoot from '../App';

export default ({ clientStats }) => async (req, res) => {
	const sheet = new ServerStyleSheet();
	const styledComponents = sheet.getStyleTags();

	// eslint-disable-next-line
	injectGlobal`${globalStyles}`;

	const helmet = Helmet.renderStatic();

	const site = req.hostname.split('.')[0];
	const context = { site };

	const { js, css } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const client = new ApolloClient({
		ssrMode: true,
		link: createHttpLink({
			uri: 'http://localhost:8080/graphql',
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
					{/* <StyleSheetManager sheet={sheet.instance}> */}
					<ThemeProvider theme={colors}>
						<AppRoot />
					</ThemeProvider>
					{/* </StyleSheetManager> */}
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
	                <meta 
	                	name="viewport" 
	                	content="width=device-width, initial-scale=1" 
                    />
					<link 
						href="https://fonts.googleapis.com/css?family=Lato|Source+Code+Pro" 
						rel="stylesheet" 
					/>
					<link 
						href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/css/swiper.min.css" 
						rel="stylesheet" 
					/>
					<link 
						href="https://unpkg.com/react-select@1.2.1/dist/react-select.css" 
						rel="stylesheet" 
					/>
					${css}
					${styledComponents}
				</head>
	            <body ${helmet.bodyAttributes.toString()}>
	                <div id="react-root">${renderToString(App)}</div>
	                <div id="modal-root"></div>
					${js}
				<script id="redux-state">
					window.__REDUX_STATE__=${JSON.stringify(reduxState)}
				</script>
				<script id="apollo-state">
					window.__APOLLO_STATE__=${JSON.stringify(apolloState)}
				</script>
				</body>
			</html>
  		`);
	});
};
