import { Session } from 'next-auth';
import React from 'react';
import ConversationFeed from './Conversation';

type FeedProps = {
  session: Session;
};

const Feed: React.FC<FeedProps> = ({ session }) => {
  return <ConversationFeed session={session} />;
};

export default Feed;
