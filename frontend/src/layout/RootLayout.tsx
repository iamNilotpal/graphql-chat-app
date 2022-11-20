import { Box } from '@chakra-ui/react';
import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100%" height="100vh" bg="#231f20">
      {children}
    </Box>
  );
};

export default RootLayout;
