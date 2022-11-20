import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { Session } from 'next-auth';
import React from 'react';
import Modal from '../../../Modal';

type ConversationsWrapperProps = {
  session: Session;
};

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({
  session,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blackAlpha.400" width="400px">
      <Button onClick={onOpen}>Start a new conversation</Button>
      <Modal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ConversationsWrapper;
