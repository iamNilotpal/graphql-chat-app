import { Session } from 'next-auth';

type GraphQLContext = {
  session: Session;
  // prisma: PrismaClient
  // pubsub: PubSub
};

export default GraphQLContext;
