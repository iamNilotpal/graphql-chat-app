import { PrismaClient } from '@prisma/client';
import { Session } from './session';

type GraphQLContext = {
  session: Session;
  prisma: PrismaClient;
  // pubsub: PubSub
};

export default GraphQLContext;
