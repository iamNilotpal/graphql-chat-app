import { Box, Center } from '@chakra-ui/react';
import { Session } from 'next-auth';
import Login from './Login';
import GetUsername from './Username';

type AuthProps = {
  session: Session | null;
  updateSession: () => void;
};

const Auth: React.FC<AuthProps> = ({ session, updateSession }) => {
  return (
    <Box bgSize="cover" bgRepeat="no-repeat" bgImage="/background.jpg">
      <Center
        h="100vh"
        flexDir="column"
        bgColor="blackAlpha.500"
        backdropFilter="blur(8px)"
      >
        {session?.user ? (
          <GetUsername updateSession={updateSession} />
        ) : (
          <Login />
        )}
      </Center>
    </Box>
  );
};

export default Auth;
