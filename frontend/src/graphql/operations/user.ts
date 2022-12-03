import { gql } from '@apollo/client';

const UserOperations = {
  Query: {
    searchUsers: gql`
      query SearchUsersQuery($username: String!) {
        searchUsers(username: $username) {
          success
          error {
            message
            statusCode
          }
          data {
            users {
              id
              image
              username
            }
          }
        }
      }
    `,
  },

  Mutation: {
    createUsername: gql`
      mutation CreateUserName($username: String!) {
        createUsername(username: $username) {
          success
          error {
            message
            statusCode
          }
          data {
            user {
              id
              image
              username
            }
          }
        }
      }
    `,
  },

  Subscription: {},
};

export default UserOperations;
