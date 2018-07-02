import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { Canvas } from './universal/components';
import { Header } from './universal/containers';

import Landing from './universal/pages/Landing';
import Product from './universal/pages/Product';

@withRouter
export default class App extends Component {
	render() {
		const { ...rest } = this.props;

		return (
			<Canvas>
				<Header />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/product/:id" component={Product} />
				</Switch>
				<footer>
					<h1>FOOTER</h1>
				</footer>
			</Canvas>
		);
	}
}
