import React, { useState, useEffect } from "react";
import { Button, Box} from "@chakra-ui/react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Textarea,
  Center,
  CircularProgress,
} from "@chakra-ui/react";

const UpdateTaskForm = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const getTaskDetails = async () => {
    setLoading(true);
    await axios
      .get(`/api/v1/todo/get-todo/${id}`)
      .then((response) => {
        setTaskTitle(response.data.todo.title);
        setTaskDescription(response.data.todo.description);
        setTaskStatus(response.data.todo.status);
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

  const formSubmission = async () => {
    if (taskTitle === "" || taskDescription === "" || taskStatus === "") {
      toast.error("All fields are required", {
        toastId: "error1",
        autoClose: 4000,
      });
    } else {
      setUpdateLoading(true);
      const formData = {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
      };

      console.log("this is new task", {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
      });
      await axios
        .put(`/api/v1/todo/update-todo/${id}`, formData)
        .then((response) => {
          console.log("this is update response", response);
          toast.success("Task Created Successfully", {
            toastId: "success1",
            autoClose: 4000,
          });
        })
        .catch((error) => {
          console.log(error.response.data.message);
          toast.error("Task Update Successfully", {
            toastId: "error1",
            autoClose: 4000,
          });
        });
      setUpdateLoading(false);
    }
  };

  useEffect(() => {
    getTaskDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <Box borderWidth={"2px"} boxShadow={"2xl"} rounded={"lg"} p={6}>
            <FormControl mt={5}>
              <FormLabel>Title</FormLabel>
              <Input
                id={"title"}
                type="text"
                name={"title"}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={5}>
              <FormLabel>Description</FormLabel>
              <Textarea
                id="description"
                name="description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="Enter description"
              />
            </FormControl>
            <FormControl mt={5}>
              <FormLabel>Status</FormLabel>
              <Select
                id="status"
                name="status"
                defaultValue={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <option value={"completed"}>Completed</option>

                <option value={"active"}>Active</option>
                <option value={"pending"}>Pending</option>
              </Select>
            </FormControl>

            <Button
              mt={5}
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={formSubmission}
            >
              {updateLoading ? (
                <Center h="20vh">
                  {" "}
                  <CircularProgress
                    isIndeterminate
                    color="black"
                    size={"1.5rem"}
                  />
                </Center>
              ) : (
                "Update Task"
              )}
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default UpdateTaskForm;
