import { getProductsRequest } from '../../../../server/api/ApiProducts';

export default {
	Query: {
		async getProducts() {
			const { products } = await getProductsRequest();
			console.log(products, 'products!');
			return products;
		},
		async getProduct(_, { input }) {
			const { products } = await getProductsRequest(input);

			console.log(products, 'single product!');
			return products;
		},
	},
};
