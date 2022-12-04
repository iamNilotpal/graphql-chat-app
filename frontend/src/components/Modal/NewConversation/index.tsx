import { useLazyQuery, useMutation } from '@apollo/client';
import {
  Button,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import ConversationOperations from '../../../graphql/operations/conversation';
import UserOperations from '../../../graphql/operations/user';
import Participants from '../../Chat/Conversations/Participants';
import SearchedUsersList from '../../Chat/Conversations/SearchedUsersList';
import BaseModal from '../BaseModal';

import { useRouter } from 'next/router';
import { toastValues } from '../../../constants/toast';
import {
  CreateConversationInput,
  CreateConversationResponse,
} from '../../../types/operations/conversation';
import {
  SearchedUser,
  SearchUsersInput,
  SearchUsersResponse,
} from '../../../types/operations/user';

type NewConversationModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewConversationModal: React.FC<NewConversationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const toast = useToast();
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
    if (participants.length === 0) return;
    const participantIds: string[] = [session?.user!, ...participants].map(
      (p) => p.id
    );

    try {
      const { data } = await createConversation({
        variables: { participantIds },
      });

      console.log(data?.createConversation.data);

      if (data?.createConversation.success) {
        onClose();
        setParticipants([]);

        toast({
          ...toastValues,
          description:
            participants.length > 1
              ? `${participants[0].username} and ${participants.length - 1} ${
                  participants.length === 2 ? 'other' : 'others'
                } has been added.`
              : `${participants[0].username} has been added.`,
        });

        router.push({
          query: { conversation: data.createConversation.data.conversation.id },
        });
      } else {
        toast({
          ...toastValues,
          status: 'error',
          description: data?.createConversation.error?.message,
        });
      }
    } catch (error) {
      toast({
        status: 'error',
        description:
          error instanceof Error ? error.message : 'Something went wrong.',
      });
    }
  };

  return (
    <BaseModal
      isCentered
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
              loadingText="Searching..."
            >
              Submit
            </Button>
          </Stack>
        </form>
        {searchedUsersData?.searchUsers.data.users && (
          <SearchedUsersList
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
