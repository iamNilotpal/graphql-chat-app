import userResolver from './user';
import chatResolver from './chat';
import merge from 'lodash.merge';

export default merge({}, userResolver, chatResolver);
