import React from "react";
import { Center, CircularProgress } from "@chakra-ui/react";
const Loader = () => {
  return (
    <>
      <Center h="50vh">
        {" "}
        <CircularProgress isIndeterminate color="black" size={"3rem"} />
      </Center>
    </>
  );
};

export default Loader;
