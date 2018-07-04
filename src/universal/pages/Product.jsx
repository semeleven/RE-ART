import React from 'react';
import { Main } from '../components';
import ProductContainer from '../containers/Product';

const ProductPage = ({ ...rest }) => (
	<Main title="Home Page">
		<ProductContainer {...rest} />
	</Main>
);

export default ProductPage;
