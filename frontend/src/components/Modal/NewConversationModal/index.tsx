import { useLazyQuery } from '@apollo/client';
import {
  Button,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import UserOperations from '../../../graphql/operations/user';
import {
  SearchUser,
  SearchUsersData,
  SearchUsersInput,
} from '../../../types/operations';
import Participants from '../../Participants';
import UserSearchList from '../../UserSearchList';
import BaseModal from '../BaseModal';

type NewConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewConversationModal: React.FC<NewConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [username, setUsername] = useState('');
  const [participants, setParticipants] = useState<SearchUser[]>([]);
  const [searchUsers, { data, loading, error }] = useLazyQuery<
    SearchUsersData,
    SearchUsersInput
  >(UserOperations.Query.searchUsers);

  const onSubmitUsername = (e: React.FormEvent) => {
    e.preventDefault();
    searchUsers({ variables: { username } });
    setUsername('');
  };

  const onSelectParticipant = (participant: SearchUser) => {
    const exist = participants.find(
      (p) => p.id.toString() === participant.id.toString()
    );
    if (exist) return;
    setParticipants((prev) => [...prev, participant]);
  };

  const onRemoveParticipant = (participant: SearchUser) => {
    setParticipants((prev) =>
      prev.filter((p) => p.id.toString() !== participant.id.toString())
    );
  };

  const onCreateConversation = async () => {
    if (participants.length === 0) return;
    try {
    } catch (error) {}
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={() => {
        setUsername('');
        setParticipants([]);
        onClose();
      }}
    >
      <ModalHeader>Search or start a conversation</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={5}>
        <form onSubmit={onSubmitUsername}>
          <Stack spacing={5}>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              type="submit"
              disabled={!username || loading}
              isLoading={loading}
            >
              Submit
            </Button>
          </Stack>
        </form>
        {data?.searchUsers && (
          <UserSearchList
            users={data.searchUsers || []}
            onSelectParticipant={onSelectParticipant}
          />
        )}
        {participants.length > 0 && (
          <Participants
            participants={participants}
            onRemoveParticipant={onRemoveParticipant}
            onCreateConversation={onCreateConversation}
          />
        )}
        <Text
          fontSize="12px"
          fontWeight="bold"
          textAlign="center"
          color="red.600"
        >
          {error?.message}
        </Text>
      </ModalBody>
    </BaseModal>
  );
};

export default NewConversationModal;
