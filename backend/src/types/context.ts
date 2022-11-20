import { Session } from 'next-auth';
import { PrismaClient } from '@prisma/client';

type GraphQLContext = {
  session: Session;
  prisma: PrismaClient;
  // pubsub: PubSub
};

export default GraphQLContext;
