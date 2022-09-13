import React from "react";
import {
  Heading,
  Flex,
  Box,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import dateFormat from "dateformat";

const Card = ({key,title,description,createdAt,index,status}) => {
  return (
    <>
      {" "}
      <Box
      key={key}
        my={{ base: "1rem" }}
        mx={{ base: "1rem", md: "1.5rem", lg: "1rem" }}
        mb={{ md: "1.5rem", lg: "2rem" }}
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.600")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Flex align={"center"} justify={"space-between"} flexDirection={"row"}>
          <Box>
            <Text
              fontWeight={600}
              fontSize={"3xl"}
              color={"gray.500"}
              mb={4}
              align={"left"}
            >
              #{index + 1}
            </Text>
          </Box>
          <Box color={"blue"}>View</Box>
        </Flex>

        <Heading fontSize={"2xl"} fontFamily={"body"}>
        {title.length < 7 ? title : `${title.slice(0, 15)} ...`}

        </Heading>
        <Text fontWeight={600} color={"gray.500"} my={4}>
        Created At <>&nbsp;</>
          {dateFormat(createdAt, "dddd, mmmm dS, yyyy,")}        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
                    {description.length < 25 ? description : `${description.slice(0, 25)} ...`}

        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
               {status}
          </Badge>
        </Stack>
      </Box>
    </>
  );
};

export default Card;
