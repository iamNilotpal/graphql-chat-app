import { AddIcon, DeleteIcon, SettingsIcon } from '@chakra-ui/icons';
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
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

import PrimaryText from '../../../Texts/PrimaryText';
import SecondaryText from '../../../Texts/SecondaryText';

const MENU_ITEMS = [
  { label: 'Logout', Icon: AddIcon, onClick: () => signOut() },
  { label: 'Delete Account', Icon: DeleteIcon, onClick: () => {} },
];

const Header = () => {
  const { data } = useSession();

  console.log(data);

  return (
    <HStack
      px={4}
      py={6}
      justify="space-between"
      borderBottomWidth="thin"
      borderBottomColor="#373a40"
    >
      <HStack spacing="3">
        <Avatar p={1} size="md" bgColor="#6C9BD8" src={data?.user.image!} />
        <Flex flexDir="column">
          <PrimaryText
            text={data?.user.username!}
            textProps={{ fontWeight: 'bold', fontSize: '14px' }}
          />
          <Link href="/me">
            <SecondaryText
              text="My Account"
              textProps={{ color: 'blue.400', cursor: 'pointer' }}
            />
          </Link>
        </Flex>
      </HStack>
      <Menu colorScheme="facebook">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<SettingsIcon />}
          variant="outline"
        />
        <MenuList bgColor="#231f20">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.label}
              bgColor="#231f20"
              icon={<item.Icon />}
              onClick={item.onClick}
              _hover={{ bgColor: 'whiteAlpha.100' }}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Header;
