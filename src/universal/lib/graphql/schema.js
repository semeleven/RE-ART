import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import RootDefinition from './RootDefinition.gql';
import RootResolver from './RootResolver';

import ProductsDefinition from './Products/ProductsDefinition.gql';
import ProductsResolver from './Products/ProductsResolver';

import AuthDefinition from './Auth/AuthDefinition.gql';
import AuthResolver from './Auth/AuthResolver';

export default makeExecutableSchema({
	typeDefs: [RootDefinition, ProductsDefinition, AuthDefinition],
	resolvers: _.merge({}, RootResolver, ProductsResolver, AuthResolver),
});
