import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './universal/Routes';

export default () => (
	<div>
		<header>
			header
		</header>
		<Router>
			<Routes />
		</Router>
		<footer>
			footer
		</footer>
	</div>
);
