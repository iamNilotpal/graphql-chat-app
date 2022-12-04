import { Center, Box, Text } from '@chakra-ui/react';
import React from 'react';

const EmptyState = () => {
  return (
    <Box
      w="100%"
      backgroundSize="cover"
      borderBottomWidth="8px"
      bgImage="/geometric.jpg"
      borderBottomColor="purple.400"
      bgRepeat="no-repeat"
    >
      <Center
        width="100%"
        height="100%"
        bg="blackAlpha.300"
        backdropFilter="blur(8px) hue-rotate(90deg)"
      >
        <Text w="35%" m="0 auto" textAlign="center" fontWeight="medium">
          {'Send and receive messages without keeping your phone online.'.toUpperCase()}
        </Text>
      </Center>
    </Box>
  );
};

export default EmptyState;
