import React from 'react';
import { useWindowScroll } from 'react-use';
import {
  Box,
  IconButton,
  Image,
  HStack,
  Spacer,
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  List,
  ListItem,
  useDisclosure,
} from '@chakra-ui/react';
import { Container } from 'react-grid-system';
import { FiSearch, FiMail, FiMenu } from 'react-icons/fi';

export const Navbar = () => {
  const { y } = useWindowScroll();

  return (
    <Box
      pos="fixed"
      w="full"
      py="4"
      bg={y ? 'white' : 'transparent'}
      boxShadow={y ? 'base' : 'none'}
      transitionDuration="0.3s"
      transitionProperty="background-color, box-shadow"
      zIndex={1}
    >
      <Container>
        <Flex>
          <Box>
            <Image src="https://dummyimage.com/100x50/000/fff" />
          </Box>
          <Spacer />
          <HStack>
            <IconButton
              aria-label="Search"
              icon={<FiSearch />}
              variant="outline"
            />
            <IconButton
              aria-label="Talk to us"
              icon={<FiMail />}
              variant="outline"
            />
            <MenuDrawer />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Menu"
        icon={<FiMenu />}
        variant="outline"
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody px="10" pt="10">
            <List spacing={3}>
              <ListItem>Home</ListItem>
              <ListItem>About us</ListItem>
              <ListItem>Clients</ListItem>
              <ListItem>Solutions</ListItem>
              <ListItem>News</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Support</ListItem>
              <ListItem>Talk to us</ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
