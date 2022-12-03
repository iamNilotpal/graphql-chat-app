import { gql } from '@apollo/client';

const ConversationOperations = {
  Mutation: {
    createConversation: gql`
      mutation CreateUserName($participantIds: [String!]!) {
        createConversation(participantIds: $participantIds) {
          success
          error {
            statusCode
            message
          }
          data {
            conversation {
              id
            }
          }
        }
      }
    `,
  },
};

export default ConversationOperations;
