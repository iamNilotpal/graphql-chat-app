import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Conversation {
    id: String!
    messages: [Message]!
    latestMessage: Message
    latestMessageId: String
    participants: [ConversationParticipant!]!
    createdAt: String!
    updatedAt: String!
  }

  type CreateConversationData {
    conversation: Conversation!
  }

  type CreateConversationResponse {
    success: Boolean!
    error: ApiError
    data: CreateConversationData
  }

  type Query {
    conversations: [Conversation]!
  }

  type Mutation {
    createConversation(participantIds: [String!]!): CreateConversationResponse!
  }
`;

export default typeDefs;
