import { makeExecutableSchema } from '@graphql-tools/schema';
import { PrismaClient } from '@prisma/client';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import { getSession } from 'next-auth/react';
import { Session } from './types/session';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';
import GraphQLContext from './types/context';

const app = express();
const httpServer = http.createServer(app);
dotenv.config();

const PORT = +process.env.PORT || 4000;
const prisma = new PrismaClient();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const server = new ApolloServer({
  schema,
  cache: 'bounded',
  csrfPrevention: true,

  context: async ({ req }): Promise<GraphQLContext> => {
    const session = await getSession({ req });
    return { session: session as Session, prisma };
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({
    app,
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  });
  httpServer.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startApolloServer().catch((error) => console.log(error));
