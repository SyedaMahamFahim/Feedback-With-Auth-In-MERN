import React from "react";
import { Text, Stack } from "@chakra-ui/react";

const LogoText = ({ isMobile }) => {
  return (
    <Stack spacing={3}>
      <Text
        display={isMobile ? "none" : "flex"}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Task Manager
      </Text>
    </Stack>
  );
};

export default LogoText;
