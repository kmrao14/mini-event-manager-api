import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema.js';

export default async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV !== 'production'
  });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`Server is running at ${url}`);
}
