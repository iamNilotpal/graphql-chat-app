import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    image: String
    username: String
  }

  type CreateUsernameResponse {
    success: Boolean!
    error: String
  }

  type Query {
    user(username: String!): User
    users: [User]!
  }

  type Mutation {
    createUsername(username: String!): CreateUsernameResponse!
  }
`;

export default typeDefs;
