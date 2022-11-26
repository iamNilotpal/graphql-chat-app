import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Button,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { FC } from 'react';
import { SearchUser } from '../../types/operations';

type UserSearchListProps = {
  users: SearchUser[];
  onSelectParticipant: (participant: SearchUser) => void;
};

const UserSearchList: React.FC<UserSearchListProps> = ({
  users,
  onSelectParticipant,
}) => {
  return users.length === 0 ? (
    <Text mt="5" textAlign="center" color="red.300">
      No users found.
    </Text>
  ) : (
    <Stack mt="5">
      {users.map((user) => (
        <Flex
          alignItems="center"
          justify="space-between"
          p={3}
          borderRadius="lg"
          bgColor="#16181A"
          key={user.id}
        >
          <Flex alignItems="center">
            <Avatar src={user.image} size="xs" />
            <Text ml="2">{user.username}</Text>
          </Flex>
          <Button
            onClick={() => onSelectParticipant(user)}
            size="sm"
            colorScheme="twitter"
          >
            Select
          </Button>
        </Flex>
      ))}
    </Stack>
  );
};

export default UserSearchList;
