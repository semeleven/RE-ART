import { SignRequest } from '../../../../server/api/ApiAuth';

export default {
	Mutation: {
		async Sign(_, { input }) {
			console.log(input, 'input in sign resolver!');
			return SignRequest(input);
		},
	},
};
