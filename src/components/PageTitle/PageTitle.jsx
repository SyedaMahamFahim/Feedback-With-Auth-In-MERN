import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";

const PageTitle = ({ title }) => {
  return (
    <Box mb={5}>
      <Center>
        <Text fontSize="5xl" fontWeight={900}>
          {title}
        </Text>{" "}
      </Center>
    </Box>
  );
};

export default PageTitle;
