import { SignInRequest, SignUpRequest } from '../../../../server/api/ApiAuth';

export default {
	Mutation: {
		SignIn(_, { input }) {
			return SignInRequest(input);
		},
		async SignUp(_, { input }) {
			return SignUpRequest(input);
		},
	},
};
