import { Button, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';

const GetUsername = () => {
  const [username, setUsername] = useState('');

  return (
    <VStack align="center">
      <Input
        width="350px"
        placeholder="Type your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button w="100%" disabled={!username || username.length < 3}>
        Save
      </Button>
    </VStack>
  );
};

export default GetUsername;
