import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  Text,
} from '@chakra-ui/react';
import React from 'react';

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
    <Modal onClose={onClose} isOpen={isOpen} isCentered colorScheme="telegram">
      <ModalOverlay />
      <ModalContent bg="chakra-body-bg">
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
      </ModalContent>
    </Modal>
  );
};

export default LogoutModal;
