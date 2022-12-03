import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Button,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import ConversationOperations from '../../../graphql/operations/conversation';
import UserOperations from '../../../graphql/operations/user';
import Participants from '../../Participants';
import UserSearchList from '../../UserSearchList';
import BaseModal from '../BaseModal';

import {
  SearchedUser,
  SearchUsersInput,
  SearchUsersResponse,
} from '../../../types/operations/user';
import {
  CreateConversationInput,
  CreateConversationResponse,
} from '../../../types/operations/conversation';

type NewConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewConversationModal: React.FC<NewConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { data: session } = useSession();
  const [username, setUsername] = useState<string>('');
  const [participants, setParticipants] = useState<SearchedUser[]>([]);
  const [searchUsers, { data: searchedUsersData, loading: searchUserLoading }] =
    useLazyQuery<SearchUsersResponse, SearchUsersInput>(
      UserOperations.Query.searchUsers
    );
  const [createConversation, { loading: createConversationLoading }] =
    useMutation<CreateConversationResponse, CreateConversationInput>(
      ConversationOperations.Mutation.createConversation
    );

  const onSubmitUsername = (e: React.FormEvent) => {
    e.preventDefault();
    searchUsers({ variables: { username } });
    setUsername('');
  };

  const onSelectParticipant = (participant: SearchedUser) => {
    const exist = participants.find(
      (p) => p.id.toString() === participant.id.toString()
    );
    if (exist) return;
    setParticipants((prev) => [...prev, participant]);
  };

  const onRemoveParticipant = (participant: SearchedUser) => {
    setParticipants((prev) =>
      prev.filter((p) => p.id.toString() !== participant.id.toString())
    );
  };

  const onCreateConversation = async () => {
    // if (participants.length === 0) return;
    // const participantIds: string[] = [session?.user!, ...participants].map(
    //   (p) => p.id
    // );

    try {
      const { data } = await createConversation({
        variables: { participantIds: [] },
      });
      console.log(data?.createConversation);
    } catch (error) {
      console.log(error);
    }
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
              disabled={!username || searchUserLoading}
              isLoading={searchUserLoading}
            >
              Submit
            </Button>
          </Stack>
        </form>
        {searchedUsersData?.searchUsers.data.users && (
          <UserSearchList
            users={searchedUsersData?.searchUsers.data.users || []}
            onSelectParticipant={onSelectParticipant}
          />
        )}
        {participants.length > 0 && (
          <Participants
            participants={participants}
            onRemoveParticipant={onRemoveParticipant}
            onCreateConversation={onCreateConversation}
            loading={createConversationLoading}
          />
        )}
        {!searchedUsersData?.searchUsers.success && (
          <Text
            fontSize="12px"
            fontWeight="bold"
            textAlign="center"
            color="red.600"
          >
            {searchedUsersData?.searchUsers.error?.message}
          </Text>
        )}
      </ModalBody>
    </BaseModal>
  );
};

export default NewConversationModal;
