import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { Canvas } from '@Components';
import { Header, Auth } from '@Containers';

import Landing from '@Pages/Landing';
import Product from '@Pages/Product';

@withRouter
export default class App extends Component {
	render() {
		return (
			<Canvas>
				<Header />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/product/:id" component={Product} />
				</Switch>
				<Auth {...this.props} />
				{/* <footer> */}
				{/* <h1>FOOTER</h1> */}
				{/* </footer> */}
			</Canvas>
		);
	}
}
