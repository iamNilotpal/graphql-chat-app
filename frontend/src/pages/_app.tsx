import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { theme } from '../chakra/theme';
import { client } from '../graphql/apollo-client';

/* FONTS */
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';

export default function App({
  Component,
  pageProps: { session, ...rest },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Component {...rest} />
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
