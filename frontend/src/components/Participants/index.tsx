import { CloseIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SearchUser } from '../../types/operations';

type ParticipantsProps = {
  participants: SearchUser[];
  onRemoveParticipant: (participant: SearchUser) => void;
  onCreateConversation: () => void;
};

const Participants: React.FC<ParticipantsProps> = ({
  participants,
  onRemoveParticipant,
  onCreateConversation,
}) => {
  return participants.length == 0 ? (
    <Text mt="5" textAlign="center">
      Select an user to chat with
    </Text>
  ) : (
    <Box mt="5">
      <Flex w="100%" flexWrap="wrap" gap={2}>
        {participants.map((participant) => (
          <Badge key={participant.id} colorScheme="pink">
            <Flex alignItems="center" p={2}>
              <Text mr="5">{participant.username}</Text>
              <CloseIcon
                onClick={() => onRemoveParticipant(participant)}
                cursor="pointer"
              />
            </Flex>
          </Badge>
        ))}
      </Flex>
      <Button
        mt="5"
        size="sm"
        w="100%"
        colorScheme="messenger"
        onClick={onCreateConversation}
      >
        Create Conversation
      </Button>
    </Box>
  );
};

export default Participants;
