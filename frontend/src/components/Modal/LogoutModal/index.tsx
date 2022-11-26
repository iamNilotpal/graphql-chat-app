import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import BaseModal from '../BaseModal';

type LogoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  signOut: () => void;
};

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  signOut,
}) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalHeader fontWeight="bold" color="red.600">
        Confirm Logout
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text fontSize="14px">Are you sure you want to logout?</Text>
      </ModalBody>
      <ModalFooter>
        <Button fontSize="13px" onClick={onClose} mr="10px">
          Close
        </Button>
        <Button
          fontSize="13px"
          onClick={signOut}
          bg="red.400"
          _hover={{ bg: 'red.600' }}
        >
          Logout
        </Button>
      </ModalFooter>
    </BaseModal>
  );
};

export default LogoutModal;
