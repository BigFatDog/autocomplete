import merge from 'lodash/merge';
import pubsub from './pubsub';

const ApiList = [];

const apiSchema = {
  typeDefs: ApiList.map(d => d.typeDefs),
  resolvers: merge({}, ...ApiList.map(d => d.createResolvers(pubsub))),
  resolverValidationOptions: { requireResolversForAllFields: false },
};

export default apiSchema;
