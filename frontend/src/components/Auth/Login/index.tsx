import { Button, Text } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import googleIcon from '../../../assets/google.png';

const Login = () => {
  return (
    <>
      <Text fontSize="3xl" fontWeight="bold">
        Login To Your Account
      </Text>
      <Button
        aria-label="google login"
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="10px"
        onClick={() => signIn('google')}
        leftIcon={
          <Image src={googleIcon} alt="Google icon" width={20} height={20} />
        }
      >
        Login With Google
      </Button>
    </>
  );
};

export default Login;
