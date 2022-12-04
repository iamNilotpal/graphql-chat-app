import conversationTypeDefs from './conversation';
import messageTypeDefs from './message';
import participantTypeDefs from './participant';
import userTypeDefs from './user';

const typeDefs = [
  userTypeDefs,
  conversationTypeDefs,
  messageTypeDefs,
  participantTypeDefs,
];

export default typeDefs;
