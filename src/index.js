import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppRoot from './App.jsx';

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
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
