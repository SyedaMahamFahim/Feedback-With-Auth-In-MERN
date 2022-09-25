import React from "react";
import {
  Box,
  Flex,
  Stack,
  Container,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import LogoText from "../LogoText/LogoText";
import { SocialLinks } from "../../constants";
import SocialButton from "../SocialButton/SocialButton";

const Footer = () => {
    const date= new Date().getFullYear()
  return (
    <>
      <Flex
        style={{
          position: "fixed",
          bottom: "0",
          right: "0",
          left: "0",
        }}
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderTopWidth="1px"
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <LogoText />
          <Text>© {date} All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            {SocialLinks.map((social, index) => {
              return (
                
                  <Box key={index}>
                    <SocialButton label={social.name} href={social.url}>
                      <social.icon />
                    </SocialButton>
                  </Box>
                
              );
            })}
          </Stack>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
