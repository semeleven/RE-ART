import Api from './Api';

const ApiProducts = new Api('http://localhost:7077');

// eslint-disable-next-line
export async function getProducts() {
	const { data } = await ApiProducts.request({
		uri: '/products',
		method: 'get',
	});

	return data;
}
