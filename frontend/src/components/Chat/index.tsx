import { Button, Text } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const Chat = () => {
  const { data } = useSession();

  return (
    <div>
      <Button onClick={() => signOut()}>Logout</Button>
      <Text>{data?.user.email}</Text>
    </div>
  );
};

export default Chat;
