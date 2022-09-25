import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  CircularProgress,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { register, login, clearErrors } from "../../redux/actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  // rehne dyyy
  const dispatch = useDispatch();

  const { error, loading, user, isAuthenticated } = useSelector(
    (state) => state.user
  );

  //   const navigate = useNavigate();
// rehne dyyy

  
  // covered
  const [name, setName] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const setAuthForm = () => {
    setSignUp(!signUp);
  };

  const loginForm = async () => {
    if (signUp) {
      // signn up
      console.log(name, email, password);

      // dispatch(register(name, email, password));
    } else {
      // Login component
      console.log(email, password);

      // dispatch(login(email, password));
    }
  };

   // covered
  // rehne dyyy
  useEffect(() => {
    if (error) {
      console.log("error after sub", error.substring(0, 10));

      toast.error(error, {
        toastId: "error1",
        autoClose: 4000,
      });
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      console.log("Authenticated", user);
    }
  }, [dispatch, error, isAuthenticated]);
// rehne dyyy
  return (
    <>
      <ToastContainer />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>
              {signUp ? "Create your account" : "Sign in to your account"}
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              {signUp && (
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              )}

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"center"}
                  justify={"center"}
                >
                  <Text
                    fontSize="md"
                    color={"blue.400"}
                    cursor={"pointer"}
                    onClick={setAuthForm}
                  >
                    {signUp
                      ? "Already has an account?"
                      : "Create a new account"}
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={loginForm}
                >
                  {loading ? (
                    <CircularProgress isIndeterminate color="gray.50" />
                  ) : signUp ? (
                    "Sign up"
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default AuthForm;
