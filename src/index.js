import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { injectGlobal } from 'styled-components';
import globalStyles from './injectGlobal';
// eslint-disable-next-line
import createStore from './universal/lib/redux/store';

import { ThemeProvider } from './universal/lib/styled';
import { colors } from './universal/lib/styled/theme';

import AppRoot from './App.jsx';

const preloadedReduxState = window.__REDUX_STATE__;
const preloadedApolloState = window.__APOLLO_STATE__;
// const preloadedApolloState = window.__APOLLO_STATE__;

// Allow the passed state to be garbage-collected
delete window.__REDUX_STATE__;
delete window.__APOLLO_STATE__;

const client = new ApolloClient({
	// By default, this client will send queries to the
	//  `/graphql` endpoint on the same host
	link: new HttpLink(),
	cache: new InMemoryCache(),
	initialState: preloadedApolloState,
});

const { store } = createStore(preloadedReduxState);

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

function render(Component) {
	ReactDOM.hydrate(
		<ApolloProvider client={client}>
			<ReduxProvider store={store}>
				<AppContainer>
					<Router>
						<ThemeProvider theme={colors}>
							<Component />
						</ThemeProvider>
					</Router>
				</AppContainer>
			</ReduxProvider>
		</ApolloProvider>,
		document.getElementById('react-root')
	);
}

render(AppRoot);

if (module.hot) {
	module.hot.accept('./App', () => {
		// eslint-disable-next-line
		const NewAppRoot = require('./App').default;
		render(NewAppRoot);
	});
}
