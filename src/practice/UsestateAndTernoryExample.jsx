import React, { useState } from "react";
import { Input, FormControl, FormLabel } from "@chakra-ui/react";

const UsestateAndTernoryExample = () => {
  const [name, setName] = useState("");

    const getName=(e)=>{
        setName(e.target.value)
        console.log(name,"onchange")
    }

    const submitHandle=()=>{
      if(name==="Maham"){
        alert("Hello Maham")
      }
      console.log("Name===>",name);
    }


  return (
    <>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          onChange={getName}
          value={name}
          // onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <button onClick={submitHandle}> Submit </button>



      {/* <h1> {signUp? "Haider": "Maham"}</h1> */}
      {/* <h1> {name}</h1> */}
      {/* <Home /> */}
      {/* <AddTask/> */}
      {/* <LoginAndSign/> */}
    </>
  );
};

export default UsestateAndTernoryExample;


  // const [signUp, setSignUp] = useState(false);
  // let jsName="";
  // const getName=()=>{
  //   jsName="Maham";
  // }

  // const changeName = () => {
    // setSignUp(!signUp);

    // if (signUp) {
    //   setName("Haider");
    // } else {
    //   setName("Maham");
    // }

    // signUp? "Haider": "Maham"
    //opposite
  // };