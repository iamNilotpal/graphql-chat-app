import { Button, Flex } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import ConversationsWrapper from './Conversations/ConversationWrapper';
import FeedWrapper from './Feed/FeedWrapper';

type ChatProps = {
  session: Session;
};

const Chat: React.FC<ChatProps> = ({ session }) => {
  return (
    <Flex height="100vh">
      <ConversationsWrapper session={session} />
      <FeedWrapper session={session} />
      <Button onClick={() => signOut()} colorScheme="red">
        Logout
      </Button>
    </Flex>
  );
};

export default Chat;
