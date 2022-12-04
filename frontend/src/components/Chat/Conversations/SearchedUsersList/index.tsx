import { Avatar, Button, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { SearchedUser } from '../../../../types/operations/user';

type SearchedUsersProps = {
  users: SearchedUser[];
  onSelectParticipant: (participant: SearchedUser) => void;
};

const SearchedUsersList: React.FC<SearchedUsersProps> = ({
  users,
  onSelectParticipant,
}) => {
  return users.length === 0 ? (
    <Text
      mt="5"
      textAlign="center"
      fontSize="sm"
      fontWeight="bold"
      color="red.300"
    >
      No users found.
    </Text>
  ) : (
    <Stack mt="5">
      {users.map((user) => (
        <Flex p={3} key={user.id} alignItems="center" justify="space-between">
          <Flex alignItems="center">
            <Avatar size="xs" src={user.image} />
            <Text ml="2">{user.username}</Text>
          </Flex>
          <Button
            size="sm"
            colorScheme="purple"
            onClick={() => onSelectParticipant(user)}
          >
            <Text fontWeight="600" fontSize="12px">
              Select
            </Text>
          </Button>
        </Flex>
      ))}
    </Stack>
  );
};

export default SearchedUsersList;
