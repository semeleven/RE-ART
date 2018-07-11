import Api from './Api';

const ApiProducts = new Api('http://138.68.85.252:4580');

// eslint-disable-next-line
export function SignRequest({ username = null, email, password }) {
	const isSignUp = username != null;

	const body = {
		email,
		password,
	};

	if (isSignUp) {
		body.username = username;
	}

	return ApiProducts.request({
		uri: isSignUp ? '/signup/' : '/signin/',
		method: 'post',
		body,
	});
}
