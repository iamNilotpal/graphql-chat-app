import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import { theme } from '../chakra/theme';
import { client } from '../graphql/apollo-client';
import RootLayout from '../layout/RootLayout';
import Seo from '../layout/Seo';

/* FONTS */
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

export default function App({
  Component,
  pageProps: { session, ...rest },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Seo />
          <RootLayout>
            <Component {...rest} />
          </RootLayout>
        </ChakraProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
