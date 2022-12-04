import { Flex } from '@chakra-ui/react';
import { Session } from 'next-auth';

import Conversations from './Conversations';
import Feed from './Feed';

type ChatProps = {
  session: Session;
};

const Chat: React.FC<ChatProps> = ({ session }) => {
  return (
    <Flex height="100vh">
      <Conversations session={session} />
      <Feed session={session} />
    </Flex>
  );
};

export default Chat;
