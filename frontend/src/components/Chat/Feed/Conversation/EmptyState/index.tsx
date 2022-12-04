import { Center, Box, Text } from '@chakra-ui/react';
import React from 'react';

const EmptyState = () => {
  return (
    <Box
      w="100%"
      bgColor="#231f20"
      borderBottomWidth="8px"
      borderBottomColor="purple.400"
    >
      <Center width="100%" height="100%">
        <Text w="35%" m="0 auto" textAlign="center" fontWeight="medium">
          {'Send and receive messages without keeping your phone online.'.toUpperCase()}
        </Text>
      </Center>
    </Box>
  );
};

export default EmptyState;
