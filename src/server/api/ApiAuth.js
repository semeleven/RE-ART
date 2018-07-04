import Api from './Api';

const ApiProducts = new Api('http://localhost:7077');

export function SignUpRequest({ username, email, password }) {
	return ApiProducts.request({
		uri: '/signup/',
		body: {
			username,
			email,
			password,
		},
		method: 'post',
	});
}

export function SignInRequest({ username = '', email = '', password }) {
	return ApiProducts.request({
		uri: '/signin/',
		body: {
			username,
			email,
			password,
		},
		method: 'post',
	});
}
