import React from 'react'
import { Route } from 'react-router-dom'
import Universal from 'react-universal-component';
import { Switch } from 'react-router';
// import '../css/nav.css'
// import NotFound from './NotFound'
// import Test from './Test';
const UniversalComponent = Universal(/* webpackChunkName: Test */ import('./Test.tsx'));
export default () => (
	<div>
		<header>
			header
		</header>
		<Switch>
			<Route exact path='/'>
				<UniversalComponent />
			</Route>
			{/*<Route component={NotFound} />*/}
		</Switch>
		<footer>
			footer
		</footer>
	</div>
);