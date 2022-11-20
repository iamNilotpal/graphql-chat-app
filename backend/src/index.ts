import { makeExecutableSchema } from '@graphql-tools/schema';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import http from 'http';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const app = express();
const httpServer = http.createServer(app);
const PORT = +process.env.PORT || 4000;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const server = new ApolloServer({
  schema,
  cache: 'bounded',
  csrfPrevention: true,
  context: async ({ req }) => ({ token: req.headers.token }),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
  httpServer.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer().catch((error) => console.log(error));
