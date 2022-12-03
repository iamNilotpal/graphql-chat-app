import { ApolloError, AuthenticationError } from 'apollo-server-core';
import { returnApiError, returnApiResponse } from '../../lib/api-response';
import conversationService from '../../services/conversation.service';
import userService from '../../services/user.service';
import GraphQLContext from '../../types/context';
import {
  CreateConversationInput,
  CreateConversationResponse,
} from '../../types/conversation';

const resolver = {
  Query: {},
  Mutation: {
    createConversation: async (
      _: any,
      { participantIds }: CreateConversationInput,
      { session }: GraphQLContext
    ): Promise<CreateConversationResponse> => {
      try {
        userService.checkAuthentication(session);

        const conversation = await conversationService.createConversation(
          participantIds,
          session.user.id
        );
        return returnApiResponse({ conversation });
      } catch (error) {
        return returnApiError(error);
      }
    },
  },
};

export default resolver;
