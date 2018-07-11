import Api from './Api';

const ApiProducts = new Api('http://138.68.85.252:4580');

// eslint-disable-next-line
export async function GetProductsRequest({ id = null } = {}) {
	const { data } = await ApiProducts.request({
		uri: `/products/${id != null ? id : ''}`,
		method: 'get',
	});

	return data;
}
