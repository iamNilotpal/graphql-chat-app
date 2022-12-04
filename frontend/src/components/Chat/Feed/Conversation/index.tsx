import { Flex } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { useRouter } from 'next/router';
import EmptyState from './EmptyState';

type ConversationFeedProps = {
  session: Session;
};

const ConversationFeed: React.FC<ConversationFeedProps> = ({}) => {
  const { query } = useRouter();

  return (
    <Flex flexGrow={1} bgColor="#231f20">
      {query.conversation ? <h1>{query.conversation}</h1> : <EmptyState />}
    </Flex>
  );
};

export default ConversationFeed;
