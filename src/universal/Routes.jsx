import React from 'react'
import { Route, Link } from 'react-router-dom'
import universal from 'react-universal-component';
import { Switch } from 'react-router'
// import '../css/nav.css'
// import NotFound from './NotFound'
// import Test from './Test';
const UniversalComponent = universal(/* webpackChunkName: Test */ import('./Test'));
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