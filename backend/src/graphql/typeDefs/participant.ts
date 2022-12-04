import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type ConversationParticipant {
    id: String!
    user: User!
    userId: String!
    updatedAt: String!
    createdAt: String!
    conversationId: String!
    conversation: Conversation!
    hasSeenLatestMessage: Boolean!
  }
`;

export default typeDefs;
