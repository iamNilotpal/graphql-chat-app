import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    image: String
    username: String
  }

  type ApiError {
    statusCode: Int!
    message: String!
  }

  type SearchUsernameData {
    users: [User]!
  }

  type SearchUsernameResponse {
    error: ApiError
    success: Boolean!
    data: SearchUsernameData
  }

  type CreateUsernameData {
    user: User!
  }

  type CreateUsernameResponse {
    success: Boolean!
    error: ApiError
    data: CreateUsernameData
  }

  type Query {
    users: [User]!
    user(username: String!): User
    searchUsers(username: String!): SearchUsernameResponse!
  }

  type Mutation {
    createUsername(username: String!): CreateUsernameResponse!
  }
`;

export default typeDefs;
