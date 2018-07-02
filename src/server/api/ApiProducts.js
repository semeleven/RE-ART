import Api from './Api';

const ApiProducts = new Api('http://localhost:7077');

// eslint-disable-next-line
export async function getProductsRequest({ id = null } = {}) {
	try {
		const { data } = await ApiProducts.request({
			uri: `/products/${id != null ? id : ''}`,
			method: 'get',
		});

		return data;
	} catch (e) {
		console.error(e, 'error!');
	}
}
