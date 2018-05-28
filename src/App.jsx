import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './universal/Routes';

export default () => (
	<div>
		<Router>
			<Routes />
		</Router>
	</div>
);