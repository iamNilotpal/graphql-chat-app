import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { Session } from 'next-auth';
import React from 'react';

import NewConversationModal from '../../Modal/NewConversationModal';

type ConversationListProps = {
  session: Session;
};

const ConversationList: React.FC<ConversationListProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex width="100%" justifyContent="center">
      <Button
        py="3"
        width="90%"
        bg="#25262b"
        borderRadius="md"
        onClick={onOpen}
      >
        <Text textAlign="center" fontWeight="600" color="#c1c2c5" fontSize="sm">
          Find or start a new conversation
        </Text>
      </Button>
      <NewConversationModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ConversationList;
