import { gql } from '@apollo/client';

export default {
  Query: {},

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
