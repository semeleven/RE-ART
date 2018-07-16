import Api from './Api';

console.log(process.env.API_URL);
const ApiProducts = new Api(process.env.API_URL);

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
