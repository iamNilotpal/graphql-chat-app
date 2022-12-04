import { useMutation } from '@apollo/client';
import { Button, Input, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

import userOperations from '../../../graphql/operations/user';
import {
  CreateUsernameInput,
  CreateUserNameResponse,
} from '../../../types/operations/user';

type GetUsernameProps = {
  updateSession: () => void;
};

const GetUsername: React.FC<GetUsernameProps> = ({ updateSession }) => {
  const toast = useToast();
  const [username, setUsername] = useState('');
  const [createUsername, { loading }] = useMutation<
    CreateUserNameResponse,
    CreateUsernameInput
  >(userOperations.Mutation.createUsername);

  const handleCreateUsername = async () => {
    try {
      if (!username) throw new Error('Username is required');
      const { data } = await createUsername({
        variables: { username },
      });

      if (!data?.createUsername.success)
        throw new Error(data?.createUsername.error?.message);
      updateSession();
    } catch (error) {
      toast({
        status: 'error',
        variant: 'subtle',
        description:
          error instanceof Error ? error.message : 'Something went wrong',
        isClosable: true,
        duration: 2000,
      });
    }
  };

  return (
    <VStack align="center">
      <Input
        width="350px"
        fontSize="13px"
        value={username}
        placeholder="Pick a username"
        bgColor="whiteAlpha.200"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        width="350px"
        isLoading={loading}
        bgColor="whiteAlpha.200"
        onClick={handleCreateUsername}
        disabled={!username || username.length < 3 || loading}
      >
        Save
      </Button>
    </VStack>
  );
};

export default GetUsername;
