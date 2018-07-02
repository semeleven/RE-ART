import gql from 'graphql-tag';

export const getProductQuery = gql`
	query ($id: Int!) {
		getProduct(input: { id: $id }) {
			id
			price
			description
			code
			author
			url
			name
		}
	}
`;