import React from 'react';
import ProductContainer from '../containers/Product';

const ProductPage = ({ ...rest }) => (
	<ProductContainer {...rest} />
);

export default ProductPage;