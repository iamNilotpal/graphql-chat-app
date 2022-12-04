import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import EmptyState from './EmptyState';

const ConversationFeed = () => {
  const { query } = useRouter();

  return (
    <Flex flexGrow={1}>
      {query.conversation ? <h1>{query.conversation}</h1> : <EmptyState />}
    </Flex>
  );
};

export default ConversationFeed;
