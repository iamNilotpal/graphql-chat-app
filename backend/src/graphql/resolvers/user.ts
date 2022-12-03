import { returnApiError, returnApiResponse } from '../../lib/api-response';
import userService from '../../services/user.service';
import GraphQLContext from '../../types/context';
import {
  CreateUsernameInput,
  CreateUserNameResponse,
  SearchUsernameResponse,
  SearchUsersInput,
} from '../../types/user';

const resolver = {
  Query: {
    user: () => {},
    users: () => {},
    searchUsers: async (
      _: any,
      { username }: SearchUsersInput,
      { session }: GraphQLContext
    ): Promise<SearchUsernameResponse> => {
      try {
        userService.checkAuthentication(session);
        const users = await userService.searchUsersWithUsername(
          username,
          session.user.username
        );
        return returnApiResponse({ users });
      } catch (error) {
        return returnApiError(error);
      }
    },
  },

  Mutation: {
    createUsername: async (
      _: any,
      { username }: CreateUsernameInput,
      { session }: GraphQLContext
    ): Promise<CreateUserNameResponse> => {
      try {
        userService.checkAuthentication(session);
        const user = await userService.createUsername(username, session.user);
        return returnApiResponse({ user });
      } catch (error) {
        return returnApiError(error);
      }
    },
  },
};

export default resolver;
