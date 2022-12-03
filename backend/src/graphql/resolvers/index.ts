import userResolver from './user';
import conversationResolver from './conversation';
import merge from 'lodash.merge';

export default merge({}, userResolver, conversationResolver);
