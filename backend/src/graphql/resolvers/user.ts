import GraphQLContext from '../../types/context';
import { CreateUserNameData, CreateUserNameResponse } from '../../types/user';

const resolver = {
  Query: {
    user: () => {},
    users: () => {},
  },
  Mutation: {
    createUsername: async (
      _: any,
      args: CreateUserNameData,
      ctx: GraphQLContext
    ): Promise<CreateUserNameResponse> => {
      const { username } = args;
      const { session, prisma } = ctx;

      if (!session.user)
        return {
          success: false,
          error: 'Unauthorized',
        };

      try {
        const user = await prisma.user.findUnique({
          where: { username },
        });

        if (user)
          return {
            success: false,
            error: 'Username is already taken',
          };

        await prisma.user.update({
          where: { email: session.user.email },
          data: { username },
        });

        return { success: true, error: null };
      } catch (error) {
        return {
          success: false,
          error: error?.message || 'Something went wrong.',
        };
      }
    },
  },
};

export default resolver;
