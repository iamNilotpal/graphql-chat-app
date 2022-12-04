import { EditIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';
import { Session } from 'next-auth';
import React from 'react';
import NewConversationModal from '../../../Modal/NewConversation';

type FooterProps = {
  session: Session;
};

const Footer: React.FC<FooterProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      width="100%"
      justifyContent="flex-end"
      position="absolute"
      bottom={5}
      right={5}
    >
      <Tooltip
        fontSize="13px"
        fontWeight="medium"
        bgColor="purple.300"
        label="New conversation"
      >
        <IconButton
          size="sm"
          onClick={onOpen}
          icon={<EditIcon />}
          colorScheme="purple"
          aria-label="New conversation"
        />
      </Tooltip>
      <NewConversationModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Footer;
