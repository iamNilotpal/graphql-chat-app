import { useMutation } from '@apollo/client';
import { Button, Input, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import userOperations from '../../../graphql/operations/user';
import {
  CreateUsernameData,
  CreateUsernameVariables,
} from '../../../types/operations';

type GetUsernameProps = {
  updateSession: () => void;
};

const GetUsername: React.FC<GetUsernameProps> = ({ updateSession }) => {
  const toast = useToast();
  const [username, setUsername] = useState('');
  const [createUsername, { loading }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(userOperations.Mutation.createUsername);

  const handleCreateUsername = async () => {
    try {
      if (!username) throw new Error('Username is required');
      const { data } = await createUsername({
        variables: { username },
      });

      if (!data?.createUsername.success)
        throw new Error(data?.createUsername.error);
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
        placeholder="Pick a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        fontSize="13px"
      />
      <Button
        width="350px"
        disabled={!username || username.length < 3 || loading}
        onClick={handleCreateUsername}
        isLoading={loading}
      >
        Save
      </Button>
    </VStack>
  );
};

export default GetUsername;
