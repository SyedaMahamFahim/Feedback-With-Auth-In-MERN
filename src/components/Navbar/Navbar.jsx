import React from "react";
import {
  IconButton,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import LogoText from "../LogoText/LogoText";

const Navbar = ({ onOpen, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <LogoText isMobile={true} />

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <BsFillMoonFill /> : <BsSunFill />}
        />
      </HStack>
    </Flex>
  );
};

export default Navbar;
