import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Message {
    id: String!
    sender: User!
    senderId: String!
    createdAt: String!
    updatedAt: String!
    conversationId: String!
    conversation: Conversation!
    latestMessage: Conversation
  }
`;

export default typeDefs;
