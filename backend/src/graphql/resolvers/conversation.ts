import { returnApiError, returnApiResponse } from '../../lib/api-response';
import conversationService from '../../services/conversation.service';
import userService from '../../services/user.service';
import GraphQLContext from '../../types/context';
import {
  CreateConversationInput,
  CreateConversationResponse,
  GetAllConversationsResponse,
} from '../../types/conversation';

const resolver = {
  Query: {
    conversations: async (_: any, __: any, { session }: GraphQLContext) => {
      userService.checkAuthentication(session);
      try {
        const conversations = await conversationService.getAllConversations(
          null
        );
        console.log(conversations);
        return returnApiResponse({ conversations });
      } catch (error) {
        console.log(error.message);
        return returnApiError(error);
      }
    },
  },

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
        console.log(conversation);
        return returnApiResponse({ conversation });
      } catch (error) {
        return returnApiError(error);
      }
    },
  },
};

export default resolver;
