import GraphQLContext from '../../types/context';

type CreateUserNameData = {
  username: string;
};

const resolver = {
  Query: {
    user: () => {},
    users: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: CreateUserNameData, ctx: GraphQLContext) => {
      const { username } = args;
      const { user } = ctx.session;
      return { success: true, error: '' };
    },
  },
};

export default resolver;
