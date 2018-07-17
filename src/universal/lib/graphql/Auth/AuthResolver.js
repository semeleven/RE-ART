import { SignRequest } from '../../../../server/api/ApiAuth';

export default {
	Mutation: {
		async Sign(_, { input }) {
			return SignRequest(input);
		},
	},
};
