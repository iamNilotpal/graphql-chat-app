import { Button, Text, VStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
  return (
    <>
      <VStack mb="20px" spacing="0px">
        <Text
          fontSize="18px"
          fontWeight="bold"
          textTransform="uppercase"
          color="#fcb929"
        >
          Let's get up and running
        </Text>
        <Text fontSize={{ base: '11px', md: '14px' }}>
          Click on the button to get started and chat with your friends.
        </Text>
      </VStack>
      <Button
        aria-label="google login"
        onClick={() => signIn('google')}
        leftIcon={
          <Image src="/google.png" alt="Google icon" width={20} height={20} />
        }
        fontSize="14px"
      >
        Continue With Google
      </Button>
    </>
  );
};

export default Login;
