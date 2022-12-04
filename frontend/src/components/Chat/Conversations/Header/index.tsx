import { AddIcon, ExternalLinkIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

import PrimaryText from '../../../Texts/PrimaryText';
import SecondaryText from '../../../Texts/SecondaryText';

const Header = () => {
  const { data } = useSession();

  return (
    <HStack
      p={4}
      justify="space-between"
      borderBottomWidth="thin"
      borderBottomColor="#373a40"
    >
      <HStack spacing="3">
        <Avatar p={1} size="md" bgColor="#7D6CD8" src={data?.user.image!} />
        <Flex flexDir="column">
          <PrimaryText
            text="Nilotpal Deka"
            textProps={{ fontWeight: 'bold' }}
          />
          <Link href="/me">
            <SecondaryText
              text="My Account"
              textProps={{ color: 'blue.400', cursor: 'pointer' }}
            />
          </Link>
        </Flex>
      </HStack>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<SettingsIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>New Tab</MenuItem>
          <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Header;
