import { Session } from 'next-auth';
import React from 'react';

type FeedWrapperProps = {
  session: Session;
};

const FeedWrapper: React.FC<FeedWrapperProps> = () => {
  return <div>FeedWrapper</div>;
};

export default FeedWrapper;
