import { gql } from '@apollo/client';

const ConversationOperations = {
  Query: {
    getAllConversations: gql`
      query GetAllConversations {
        conversations {
          id
        }
      }
    `,
  },

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
              createdAt
              latestMessage {
                id
                sender {
                  name
                }
              }
              participants {
                hasSeenLatestMessage
              }
            }
          }
        }
      }
    `,
  },
};

export default ConversationOperations;
