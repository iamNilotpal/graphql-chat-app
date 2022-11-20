import { Center } from '@chakra-ui/react';
import { Session } from 'next-auth';
import Login from './Login';
import GetUsername from './Username';

type AuthProps = {
  session: Session | null;
  updateSession: () => void;
};

const Auth: React.FC<AuthProps> = ({ session }) => {
  return (
    <Center flexDir="column" minHeight="100vh">
      {session?.user ? <GetUsername /> : <Login />}
    </Center>
  );
};

export default Auth;
