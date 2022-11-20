import { useMutation } from '@apollo/client';
import { Button, Input, useToast, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import userOperations from '../../../graphql/operations/user';

type CreateUsernameData = {
  createUsername: {
    success: boolean;
    error: string;
  };
};

type CreateUsernameVariables = {
  username: string;
};

const GetUsername = () => {
  const toast = useToast();
  const [username, setUsername] = useState('');
  const [createUsername, { data, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(userOperations.Mutation.createUsername);

  const handleCreateUsername = async () => {
    try {
      if (!username)
        return toast({
          status: 'error',
          variant: 'subtle',
          description: 'Username is required.',
          isClosable: true,
          duration: 2000,
        });

      await createUsername({
        variables: { username },
      });
      console.log({ data: data?.createUsername, error });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <VStack align="center">
      <Input
        width="350px"
        placeholder="Type your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        w="100%"
        disabled={!username || username.length < 3}
        onClick={handleCreateUsername}
      >
        Save
      </Button>
    </VStack>
  );
};

export default GetUsername;
