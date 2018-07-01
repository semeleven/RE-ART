import { getProducts } from '../../../../server/api/ApiProducts';

export default {
	Query: {
		async getProducts() {
			const { products } = await getProducts();
			console.log(products, 'products!');
			return products;
		},
	},
};
