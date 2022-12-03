import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Conversation {
    id: String!
  }

  type Mutation {
    createConversation: Conversation!
  }
`;

export default typeDefs;
