import { Center } from '@chakra-ui/react';
import { Session } from 'next-auth';
import Login from './Login';
import GetUsername from './Username';

type AuthProps = {
  session: Session | null;
  updateSession: () => void;
};

const Auth: React.FC<AuthProps> = ({ session, updateSession }) => {
  return (
    <Center flexDir="column" minHeight="100vh">
      {session?.user ? (
        <GetUsername updateSession={updateSession} />
      ) : (
        <Login />
      )}
    </Center>
  );
};

export default Auth;
