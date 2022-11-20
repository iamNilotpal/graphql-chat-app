import { Box } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import { getSession, useSession } from 'next-auth/react';

import Auth from '../components/Auth';
import Chat from '../components/Chat';

export default function Home() {
  const { data } = useSession();

  const reloadSession = () => {
    const event = new Event('visibilitychange');
    document.dispatchEvent(event);
  };

  return (
    <Box>
      {data?.user && data?.user.username ? (
        <Chat />
      ) : (
        <Auth session={data} updateSession={reloadSession} />
      )}
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: { session },
  };
};
