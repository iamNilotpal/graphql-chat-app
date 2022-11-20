import { useMutation } from '@apollo/client';
import { Button, Input, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import userOperations from '../../../graphql/operations/user';
import { Spinner } from '@chakra-ui/react';

type CreateUsernameData = {
  createUsername: {
    success: boolean;
    error: string;
  };
};

type CreateUsernameVariables = {
  username: string;
};

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
      if (!username)
        return toast({
          status: 'error',
          variant: 'subtle',
          description: 'Username is required.',
          isClosable: true,
          duration: 2000,
        });

      const { data } = await createUsername({
        variables: { username },
      });

      if (!data?.createUsername.success)
        return toast({
          status: 'error',
          variant: 'subtle',
          description: data?.createUsername.error,
          isClosable: true,
          duration: 2000,
        });

      updateSession();
    } catch (error) {
      toast({
        status: 'error',
        variant: 'subtle',
        description: 'Something went wrong',
        isClosable: true,
        duration: 2000,
      });
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
        disabled={!username || username.length < 3 || loading}
        onClick={handleCreateUsername}
      >
        Save
        {loading && <Spinner size="sm" ml="15px" />}
      </Button>
    </VStack>
  );
};

export default GetUsername;
