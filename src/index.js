import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import AppRoot from './App.jsx';

const preloadedState = window.__APOLLO_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const client = new ApolloClient({
	// By default, this client will send queries to the
	//  `/graphql` endpoint on the same host
	link: new HttpLink(),
	cache: new InMemoryCache(),
});

function render(Component) {
	ReactDOM.hydrate(
		<ApolloProvider client={client}>
			<AppContainer>
				<Component />
			</AppContainer>
		</ApolloProvider>,
		document.getElementById('react-root')
	);
}

render(AppRoot);

if (module.hot) {
	module.hot.accept('./App.jsx', () => {
		const NewAppRoot = require('./App.jsx').default;
		render(NewAppRoot);
	});
}
