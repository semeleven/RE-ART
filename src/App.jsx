import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
// import Universal from 'react-universal-component';
import Landing from './universal/pages/Landing';

// const Landing = Universal(/* webpackChunkName: Landing */ import('./universal/pages/Landing'));

@withRouter
export default class App extends Component {
	render() {
		const { ...rest } = this.props;

		return (
			<div>
				<header>
					<h1>HEADER</h1>
				</header>
				<Switch>
					<Route exact path="/">
						<Landing {...rest} />
					</Route>
					{/* <Route component={NotFound} /> */}
				</Switch>
				<footer>
					<h1>FOOTER</h1>
				</footer>
			</div>
		);
	}
}
