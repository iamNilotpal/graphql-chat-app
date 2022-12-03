import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Conversation {
    id: String!
    createdAt: String!
    messages: [String]!
    latestMessage: String!
    participants: [String!]!
    hasSeenLatestMessage: Boolean!
  }

  type User {
    id: String
    name: String
    email: String
    image: String
    username: String
  }

  type ConversationParticipant {
    id: String!
    user: User!
    conversation: Conversation!
  }

  type Message {
    id: String!
    conversation: Conversation!
    sender: User!
    latestMessage: Conversation
    createdAt: String!
  }

  type ApiError {
    statusCode: Int!
    message: String!
  }

  type CreateConversationData {
    conversation: Conversation!
  }

  type CreateConversationResponse {
    success: Boolean!
    error: ApiError
    data: CreateConversationData
  }

  type Mutation {
    createConversation(participantIds: [String!]!): CreateConversationResponse!
  }
`;

export default typeDefs;
