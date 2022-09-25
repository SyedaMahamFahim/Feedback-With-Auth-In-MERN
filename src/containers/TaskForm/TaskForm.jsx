import React, { useState } from "react";
import { Button, Box, useColorModeValue } from "@chakra-ui/react";
import { EmptyingAllInputs } from "../../utils/";

import Loader from "../../components/Loader/Loader";
import FormInput from "../../components/FormInput/FormInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmission = async () => {
    const { title, description, status } = formData;
    if (title === "" || description === "" || status === "") {
      toast.error("All fields are required", {
        toastId: "error1",
        autoClose: 4000,
      });
    }
     
    EmptyingAllInputs();
    console.log(formData);
  };

  return (
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    <>
      <ToastContainer />
      <Box
        borderWidth={"2px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
      >
        <FormInput
          label={"Title"}
          id="title"
          type="text"
          name="title"
          handleChange={handleChange}
        />
        <FormInput
          label={"Description"}
          id="description"
          name="description"
          handleChange={handleChange}
        />
        <FormInput
          label={"Status"}
          id="status"
          name="status"
          handleChange={handleChange}
        />

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
          Create Task
        </Button>
      </Box>
    </>
    //   )}
    // </>
  );
};

export default TaskForm;
