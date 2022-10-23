import React, { useState } from "react";
import {
  Heading,
  Flex,
  Box,
  Text,
  Stack,
  Button,
  Badge,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, createdAt, index, status, id }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteTask = async (id) => {
    const confirmation = window.confirm("Do you want to delete this?");

    if (confirmation) {
      setLoading(true);
      await axios
        .delete(`/api/v1/todo/remove-todo/${id}`)
        .then((response) => {
          toast.success("Todo deleted successfully", {
            toastId: "success1",
            autoClose: 4000,
          });

          console.log("this is response", response);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            toastId: "success1",
            autoClose: 4000,
          });
        });
      // page reload
      window.location.reload();
      setLoading(false);
    }

    console.log("deleteTask", id);
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        "loading"
      ) : (
        <>
          {" "}
          <Box
            my={{ base: "1rem" }}
            mx={{ base: "1rem", md: "1.5rem", lg: "1rem" }}
            mb={{ md: "1.5rem", lg: "2rem" }}
            maxW={"320px"}
            w={"full"}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <Flex
              align={"center"}
              justify={"space-between"}
              flexDirection={"row"}
            >
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
              <Box
                color={"blue"}
                cursor={"pointer"}
                onClick={() => navigate(`/task/details/${id}`)}
              >
                View
              </Box>
            </Flex>

            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {title.length < 7 ? title : `${title.slice(0, 15)} ...`}
            </Heading>
            <Text fontWeight={600} color={"gray.500"} my={4}>
              Created At <>&nbsp;</>
              {dateFormat(createdAt, "dddd, mmmm dS, yyyy,")}{" "}
            </Text>
            <Text textAlign={"center"} px={3}>
              {description.length < 25
                ? description
                : `${description.slice(0, 25)} ...`}
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge px={2} py={1} fontWeight={"400"}>
                {status}
              </Badge>
            </Stack>
            <br />

            <Button
              w={"full"}
              px={2}
              py={1}
              color={"white"}
              bg={"blue.400"}
              _hover={{
                backgroundColor: "blue.400",
                color: "white",
              }}
              onClick={() => navigate(`/task/update/${id}`)}
              fontWeight={"400"}
            >
              Update
            </Button>
            <Button
              w={"full"}
              mt={2}
              px={2}
              py={1}
              color={"white"}
              bg={"red.400"}
              _hover={{
                backgroundColor: "red.400",
                color: "white",
              }}
              onClick={() => deleteTask(id)}
              fontWeight={"400"}
            >
              Delete
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default Card;
