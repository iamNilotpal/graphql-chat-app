import { gql } from '@apollo/client';

export default {
  Query: {
    searchUsers: gql`
      query SearchUsersQuery($username: String!) {
        searchUsers(username: $username) {
          id
          image
          username
        }
      }
    `,
  },

  Mutation: {
    createUsername: gql`
      mutation CreateUserName($username: String!) {
        createUsername(username: $username) {
          error
          success
        }
      }
    `,
  },

  Subscription: {},
};
