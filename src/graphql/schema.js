import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';

// Manually import all feature modules
// TODO: Automate this import using file system
import eventTypeDefs from './features/event/typeDefs.js';
import eventResolvers from './features/event/resolvers.js';

import attendeeTypeDefs from './features/attendee/typeDefs.js';
import attendeeResolvers from './features/attendee/resolvers.js';

// Base Query/Mutation to avoid "Must provide a Query type" error
const baseTypeDefs = `
  type Query
  type Mutation
`;

export const typeDefs = mergeTypeDefs([
  baseTypeDefs,
  eventTypeDefs,
  attendeeTypeDefs
]);

export const resolvers = mergeResolvers([
  eventResolvers,
  attendeeResolvers
]);
