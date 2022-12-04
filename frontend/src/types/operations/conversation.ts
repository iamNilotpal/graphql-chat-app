import { User } from '@prisma/client';
import { ApiError } from '..';

export type CreateConversationInput = {
  participantIds: string[];
};

export type AllConversationResponse = {
  conversations: {
    data: { conversation: Conversation };
    success: boolean;
    error: ApiError | null;
  };
};

export type Conversation = {
  id: string;
  messages: Message[];
  participants: ConversationParticipant[];
  latestMessageId?: String;
  latestMessage?: Message;
  createdAt: Date;
  updatedAt: Date;
};

type ConversationParticipant = {
  id: String;
  userId: String;
  user: User;
  conversationId: String;
  conversation: Conversation;
  hasSeenLatestMessage: Boolean;
  createdAt: Date;
  updatedAt: Date;
};

type Message = {
  id: String;
  conversationId: String;
  conversation: Conversation;
  senderId: String;
  sender: User;
  latestMessage?: Conversation;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateConversationResponse = {
  createConversation: {
    data: { conversation: Conversation };
    success: boolean;
    error: ApiError | null;
  };
};
