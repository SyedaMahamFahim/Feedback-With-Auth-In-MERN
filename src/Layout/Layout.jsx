import React from "react";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { Sidebar, Navbar, PageTitle, Footer } from "../components";

const Layout = ({ title, component }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <Sidebar
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <Sidebar onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Navbar onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          <PageTitle title={title} />
          {component}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
