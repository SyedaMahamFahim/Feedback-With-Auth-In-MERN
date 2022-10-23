import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Center,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dateFormat from "dateformat";

const TaskDetails = () => {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const getTaskDetails = async () => {
    setLoading(true);
    await axios
      .get(`/api/v1/todo/get-todo/${id}`)
      .then((response) => {
        setData(response.data.todo);
      })
      .catch((error) => {
        if (error) {
          toast.error(error.response.data.message, {
            toastId: "error1",
            autoClose: 4000,
          });
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    getTaskDetails();
    
    // eslint-disable-next-line
  }, []);

  console.log("this is data",data)
  return (
    <>
      <ToastContainer />
      {loading ? (
        <Center h="50vh">
          {" "}
          <CircularProgress isIndeterminate color="black" size={"3rem"} />
        </Center>
      ) : (
        <>
          {console.log(data)}

          <Box boxShadow={"2xl"} rounded={"lg"} 
          
          p={6}>
            <Box>
              <Heading>Title</Heading>
              <Text fontWeight={600} color={"gray.500"} my={4}>
                {data.title}
              </Text>
            </Box>
            <Divider />
            <Box mt={"1.75rem"}>
              <Heading>Description</Heading>
              <Text fontWeight={600} color={"gray.500"} my={4}>
                {data.description}
              </Text>
            </Box>
            <Divider />
            <Box mt={"1.75rem"}>
              <Heading>Status</Heading>
              <Text fontWeight={600} color={"gray.500"} my={4}>
                {data.status}
              </Text>
            </Box>
            <Divider />
            <Box>
              <Heading> Created At </Heading>
              <Text fontWeight={600} color={"gray.500"} my={4}>
                {dateFormat(data.createdAt, "dddd, mmmm dS, yyyy,")}
              </Text>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default TaskDetails;
