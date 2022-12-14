import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
  credentials: 'include',
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
