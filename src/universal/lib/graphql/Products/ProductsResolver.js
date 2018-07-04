import { GetProductsRequest } from '../../../../server/api/ApiProducts';

export default {
	Query: {
		async getProducts() {
			const { products } = await GetProductsRequest();
			console.log(products, 'products!');
			return products;
		},
		async getProduct(_, { input }) {
			const { products } = await GetProductsRequest(input);

			console.log(products, 'single product!');
			return products;
		},
	},
};
