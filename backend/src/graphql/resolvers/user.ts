import { User } from '@prisma/client';
import { AuthenticationError, HttpQueryError } from 'apollo-server-core';
import GraphQLContext from '../../types/context';
import {
  CreateUserNameData,
  CreateUserNameResponse,
  SearchUsersInput,
} from '../../types/user';

const resolver = {
  Query: {
    user: () => {},
    users: () => {},
    searchUsers: async (
      _: any,
      { username: searchUsername }: SearchUsersInput,
      { session, prisma }: GraphQLContext
    ): Promise<User[]> => {
      if (!session.user) throw new AuthenticationError('You must login.');
      try {
        const users = await prisma.user.findMany({
          where: {
            username: {
              contains: searchUsername,
              not: session.user.username,
              mode: 'insensitive',
            },
          },
        });
        return users;
      } catch (error) {
        console.log({ error });
        throw new HttpQueryError(500, 'Something went wrong');
      }
    },
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
