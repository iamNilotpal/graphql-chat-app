import { CloseIcon } from '@chakra-ui/icons';
import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { SearchedUser } from '../../../../types/operations/user';

type ParticipantsProps = {
  participants: SearchedUser[];
  loading: boolean;
  onRemoveParticipant: (participant: SearchedUser) => void;
  onCreateConversation: () => void;
};

const Participants: React.FC<ParticipantsProps> = ({
  participants,
  onRemoveParticipant,
  onCreateConversation,
  loading,
}) => {
  return participants.length == 0 ? (
    <Text mt="5" textAlign="center">
      Select an user to chat with
    </Text>
  ) : (
    <Box mt="5">
      <Flex w="100%" flexWrap="wrap" gap={2}>
        {participants.map((participant) => (
          <Badge key={participant.id} colorScheme="purple">
            <Flex alignItems="center" p={2}>
              <Text mr="5">{participant.username}</Text>
              <CloseIcon
                fontSize="10px"
                cursor="pointer"
                onClick={() => onRemoveParticipant(participant)}
              />
            </Flex>
          </Badge>
        ))}
      </Flex>
      <Button
        mt="5"
        w="100%"
        size="sm"
        disabled={loading}
        isLoading={loading}
        colorScheme="purple"
        onClick={onCreateConversation}
        loadingText="Creating conversation..."
      >
        Create Conversation
      </Button>
    </Box>
  );
};

export default Participants;
