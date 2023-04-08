import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button, Box } from "@chakra-ui/react";
import { EmptyingAllInputs } from "../../utils/";
import { addTasks, clearErrors } from "../../redux/actions/taskActions";
import Loader from "../../components/Loader/Loader";
import FormInput from "../../components/FormInput/FormInput";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.createTask);



  const [formData, setFormData] = useState(
    {
    title: "",
    description: "",
    status: "",
    }
  );


  const handleChange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value }
      );
  };

  const formSubmission = async () => {
    const { title, description, status } = formData;
    if (title === "" || description === "" || status === "") {
      toast.error("All fields are required", {
        toastId: "error1",
        autoClose: 4000,
      });
    } else {
      dispatch(
        addTasks({
          title,
          description,
          status,
        })
      );
      toast.success("Task Created Successfully", {
        toastId: "success1",
        autoClose: 4000,
      });

      
      navigate("/");

      EmptyingAllInputs();

      console.log(formData);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        toastId: "error1",
        autoClose: 4000,
      });
      dispatch(clearErrors());
    }
  }, [dispatch, error, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ToastContainer />
          <Box
            borderWidth={"2px"}
            // bg={useColorModeValue("white", "gray.900")}
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
      )}
    </>
  );
};

export default TaskForm;
