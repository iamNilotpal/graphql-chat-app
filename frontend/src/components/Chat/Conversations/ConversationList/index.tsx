import { useQuery } from '@apollo/client';
import { SearchIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import ConversationOperations from '../../../../graphql/operations/conversation';
import { someTimeAge } from '../../../../lib/format-date';
import { AllConversationResponse } from '../../../../types/operations/conversation';
import PrimaryText from '../../../Texts/PrimaryText';

const ConversationList = () => {
  const data = useQuery<AllConversationResponse>(
    ConversationOperations.Query.getAllConversations
  );

  console.log(data);

  return (
    <Box flexGrow={1}>
      <Box p={6}>
        <InputGroup size="lg" bgColor="whiteAlpha.100" borderRadius="xl">
          <InputLeftElement
            fontSize="17px"
            pointerEvents="none"
            children={<SearchIcon color="whiteAlpha.500" />}
          />
          <Input
            type="text"
            fontSize="13px"
            borderRadius="xl"
            focusBorderColor="whiteAlpha.300"
            placeholder="Search conversation..."
            _placeholder={{ color: 'whiteAlpha.500' }}
          />
        </InputGroup>
      </Box>
      <Box mt="30px">
        <HStack px={6}>
          <PrimaryText text="Messages" textProps={{ fontWeight: 'bold' }} />
          <Tag variant="subtle" colorScheme="cyan">
            <TagLabel>10</TagLabel>
          </Tag>
        </HStack>
        <Box mt="30px" px={6}>
          <HStack
            px={3}
            py={4}
            spacing={3}
            cursor="pointer"
            borderRadius="md"
            _hover={{ bgColor: '#231f20' }}
          >
            <Avatar size="sm" />
            <Flex flexDir="column">
              <PrimaryText text="Nilotpal deka" />
              <PrimaryText text="Hey what's up!" />
            </Flex>
            <Text>{someTimeAge(1670141313086)} ago</Text>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ConversationList;
