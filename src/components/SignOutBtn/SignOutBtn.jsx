import React, { useEffect } from "react";
import { Flex, useColorModeValue, Button } from "@chakra-ui/react";
import { logout,clearErrors } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignOutBtn = () => {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  // useEffect(() => {
   
  //     toast.success("Logout Successfully", {
  //       toastId: "success1",
  //       autoClose: 4000,
  //     });

  //     dispatch(clearErrors());
  
  // }, [dispatch,logout]);

  return (
    <>
      <ToastContainer />
      <Flex
        align="center"
        p="4"
        mx="4"
        cursor="pointer"
        height="20"
        borderTopWidth="1px"
        borderTopColor={useColorModeValue("gray.200", "gray.700")}
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0",
          left: "0",
        }}
      >
        <Button
          flex={1}
          px={4}
          fontSize={"sm"}
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
          onClick={logoutUser}
        >
          Sign Out
        </Button>
      </Flex>
    </>
  );
};

export default SignOutBtn;
