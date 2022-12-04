import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import { Session } from 'next-auth';
import React from 'react';
import ConversationList from './ConversationList';
import Footer from './Footer';
import Header from './Header';

type ConversationsWrapperProps = {
  session: Session;
};

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({
  session,
}) => {
  return (
    <Flex
      flexDir="column"
      bg="blackAlpha.300"
      position="relative"
      borderRightWidth="thin"
      borderRightColor="#373a40"
      width={{ base: '100%', md: '400px' }}
    >
      <Header />
      <ConversationList />
      <Footer session={session} />
    </Flex>
  );
};

export default ConversationsWrapper;
