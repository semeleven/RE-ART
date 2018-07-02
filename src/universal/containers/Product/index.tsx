import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { getProductQuery } from './ProductQuery';
// import { connect } from 'react-redux';

export default class Product extends PureComponent<any> {
	render() {
		const { match: { params: { id } } } = this.props;

		return (
				<Query
					query={getProductQuery}
					variables={{
						id,
					}}
				>
					{({ data, error, loading }) => {
						if (error) return <h1>ERROR!</h1>;
						if (loading) return <h1>LOADING...</h1>;

						console.log(data, 'data!!!');
						return <h1>HELLO WORLD!</h1>
					}}
				</Query>
		);
	}
}