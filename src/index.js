import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { injectGlobal } from 'styled-components';
import { Loading } from './universal/components';
import globalStyles from './injectGlobal';
// eslint-disable-next-line
import createStore from './universal/lib/redux/store';

import { ThemeProvider } from './universal/lib/styled';
import { colors } from './universal/lib/styled/theme';

import AppRoot from './App';

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

const { store, persistor } = createStore(preloadedReduxState);

// eslint-disable-next-line
injectGlobal`${globalStyles}`;

function render(Component) {
	ReactDOM.hydrate(
		<ApolloProvider client={client}>
			<ReduxProvider store={store}>
				<PersistGate loading={<Loading />} persistor={persistor}>
					<AppContainer>
						<Router>
							<ThemeProvider theme={colors}>
								<Component />
							</ThemeProvider>
						</Router>
					</AppContainer>
				</PersistGate>
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
