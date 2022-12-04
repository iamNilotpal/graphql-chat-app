import React from 'react';
import ConversationFeed from './Conversation';

const Feed = () => {
  return <ConversationFeed session={{ expires: new Date() }} />;
};

export default Feed;
