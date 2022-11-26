import { Box } from '@chakra-ui/react';
import { Session } from 'next-auth';
import React from 'react';
import ConversationList from './ConversationList';

type ConversationsWrapperProps = {
  session: Session;
};

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({
  session,
}) => {
  return (
    <Box
      py="6"
      px="3"
      bg="blackAlpha.400"
      borderRightWidth="thin"
      borderRightColor="#373a40"
      width={{ base: '100%', md: '400px' }}
    >
      <ConversationList session={session} />
    </Box>
  );
};

export default ConversationsWrapper;
