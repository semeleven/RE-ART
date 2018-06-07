import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import createRenderer from './universal/lib/fela/renderer';
import { Provider as FelaProvider, ThemeProvider } from 'react-fela';
import theme from './universal/lib/fela/theme';
import styles from './styles.global.css';
import createStore from './universal/lib/redux/store';

import AppRoot from './App.jsx';

const { renderer } = createRenderer();

const preloadedReduxState = window.__REDUX_STATE__;
// const preloadedApolloState = window.__APOLLO_STATE__;

// Allow the passed state to be garbage-collected
delete window.__REDUX_STATE__;

const client = new ApolloClient({
	// By default, this client will send queries to the
	//  `/graphql` endpoint on the same host
	link: new HttpLink(),
	cache: new InMemoryCache(),
});

const { store } = createStore(preloadedReduxState);

function render(Component) {
	ReactDOM.hydrate(
		<ApolloProvider client={client}>
			<ReduxProvider store={store}>
				<AppContainer>
					<FelaProvider renderer={renderer}>
						<ThemeProvider theme={theme}>
							<Router>
								<Component />
							</Router>
						</ThemeProvider>
					</FelaProvider>
				</AppContainer>
			</ReduxProvider>
		</ApolloProvider>,
		document.getElementById('react-root')
	);
}

render(AppRoot);

if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		// eslint-disable-next-line
		const NewAppRoot = require('./App.jsx').default;
		render(NewAppRoot);
	});
}
