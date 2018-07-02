import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { getProductQuery } from './ProductQuery';
// import { connect } from 'react-redux';
import InnerProduct from './components/InnerProduct';

export default class ProductContainer extends PureComponent<any> {
	render() {
		const {
			match: {
				params: { id },
			},
		} = this.props;

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

					const { getProduct } = data;
					return <InnerProduct item={getProduct[0]} />;
				}}
			</Query>
		);
	}
}
