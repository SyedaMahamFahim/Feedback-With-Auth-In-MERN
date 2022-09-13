import React from "react";
import { SidebarLinks } from "../../constants";
import SidebarNavItems from "./SidebarNavItems";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import LogoText from "../LogoText/LogoText";
import SignOutBtn from "../SignOutBtn/SignOutBtn";
const Sidebar = ({ onClose,...rest }) => {
  return (
    <>
      <Box
        transition="3s ease"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <LogoText isMobile={false}/>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {SidebarLinks.map((link) => (
          <SidebarNavItems key={link.name} icon={link.icon} url={link.url}>
            {link.name}
          </SidebarNavItems>
        ))}
       <SignOutBtn/>
      </Box>
      
    </>
  );
};

export default Sidebar;
