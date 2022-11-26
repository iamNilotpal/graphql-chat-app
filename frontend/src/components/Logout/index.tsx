import { Button, useDisclosure } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import React from 'react';
import LogoutModal from '../Modal/LogoutModal';

const Logout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Logout</Button>
      <LogoutModal
        isOpen={isOpen}
        onClose={onClose}
        signOut={() => signOut()}
      />
    </>
  );
};

export default Logout;
