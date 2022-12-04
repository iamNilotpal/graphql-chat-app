import Head from 'next/head';
import React from 'react';

const Seo = () => {
  return (
    <Head>
      <title>GraphQL Chat App</title>
      <meta property="og:title" content="GraphQL Chat App" />
      <meta property="og:url" content="http://localhost:3000" />
      <meta property="og:site_name" content="GraphQL Chat App" />
      <meta
        property="og:description"
        content="A chat application built with Next.js, GraphQL, Apollo, MongoDB and GraphQL Subscription."
      />
      <meta property="twitter:site" content="GraphQL Chat App" />
      <meta property="twitter:title" content="GraphQL Chat App" />
      <meta
        property="twitter:description"
        content="A chat application built with Next.js, GraphQL, Apollo, MongoDB and GraphQL Subscription."
      />
    </Head>
  );
};

export default Seo;
