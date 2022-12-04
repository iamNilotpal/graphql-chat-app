import { Conversation } from '@prisma/client';
import { DefaultApiResponse } from '.';

export type CreateConversationInput = {
  participantIds: string[];
};

export interface CreateConversationResponse extends DefaultApiResponse {
  data: { conversation: Conversation };
}

export interface GetAllConversationsResponse extends DefaultApiResponse {
  data: { conversations: Conversation[] };
}
