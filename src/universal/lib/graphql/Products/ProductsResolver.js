import { GetProductsRequest } from '../../../../server/api/ApiProducts';

export default {
	Query: {
		async getProducts() {
			const { products } = await GetProductsRequest();
			return products;
		},
		async getProduct(_, { input }) {
			const { products } = await GetProductsRequest(input);
			return products;
		},
	},
};
