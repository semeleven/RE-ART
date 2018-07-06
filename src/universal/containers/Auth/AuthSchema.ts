import gql from 'graphql-tag';

export const SignUpMutation = gql`
	mutation($email: String!, $username: String!, $password: String!) {
		SignUp(input: { email: $email, username: $username, password: $password }) {
			success
			message
			data {
				sign {
					token
				}
				user {
					username
					ID
					email
				}
			}
		}
	}
`;

export type SignUpVariables = {
	email: string;
	username?: string;
	password?: string;
};
