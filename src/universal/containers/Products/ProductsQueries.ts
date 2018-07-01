import gql from 'graphql-tag';

export const getProductsQuery = gql`
	query {
	  getProducts {
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