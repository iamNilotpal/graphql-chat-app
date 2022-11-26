import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isCentered?: boolean;
  bgColor?: string;
};

const BaseModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isCentered = false,
  bgColor,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={isCentered}>
      <ModalOverlay />
      <ModalContent bg={bgColor || '#1A1B1E'} justifySelf="center">
        {children}
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
