import { makeExecutableSchema } from 'graphql-tools';
import _ from 'lodash';

import RootDefinition from './RootDefinition.gql';
import RootResolver from './RootResolver';

import ProductsDefinition from './Products/ProductsDefinition.gql';
import ProductsResolver from './Products/ProductsResolver';

export default makeExecutableSchema({
	typeDefs: [RootDefinition, ProductsDefinition],
	resolvers: _.merge({}, RootResolver, ProductsResolver),
});
