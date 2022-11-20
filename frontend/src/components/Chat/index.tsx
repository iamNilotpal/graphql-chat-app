import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import LogoutModal from '../Modal/LogoutModal';
import ConversationsWrapper from './Conversations/ConversationWrapper';
import FeedWrapper from './Feed/FeedWrapper';

type ChatProps = {
  session: Session;
};

const Chat: React.FC<ChatProps> = ({ session }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex height="100vh">
      <ConversationsWrapper session={session} />
      <FeedWrapper session={session} />
      <Button onClick={onOpen}>Logout</Button>
      <LogoutModal
        isOpen={isOpen}
        onClose={onClose}
        signOut={() => signOut()}
      />
    </Flex>
  );
};

export default Chat;
