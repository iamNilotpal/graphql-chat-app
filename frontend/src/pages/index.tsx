import { Button } from '@chakra-ui/react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      {!data && <Button onClick={() => signIn('google')}>Sign In</Button>}
      {data && <Button onClick={() => signOut()}>Sign Out</Button>}
      {data?.user && <img src={data.user.image!} alt="Img" />}
    </div>
  );
}
