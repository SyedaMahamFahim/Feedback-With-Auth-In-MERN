import React from "react";
import { FormControl, FormLabel, Select, Input,Textarea } from "@chakra-ui/react";

const FormInput = ({ label, name, id, handleChange }) => {
  return (
    <>
      <FormControl mt={5}>
      <FormLabel>{label}</FormLabel>
      {name === "status" ? (
          <Select id="status" name="status" onChange={handleChange}>
            <option value={"completed"} defaultChecked>
              Completed
            </option>

            <option value={"active"}>Active</option>
            <option value={"pending"}>Pending</option>
          </Select>
        ) : name === "description" ? (
          <Textarea
            id="description"
            name="description"
          onChange={handleChange}
            borderColor="gray.300"
            _hover={{
              borderRadius: "gray.300",
            }}

            placeholder="Enter description"
          />
        ) : (
          <Input id={id} type="text" name={name} onChange={handleChange} />
        )}
      </FormControl>
    </>
  );
};

export default FormInput;


// container ---> 2 to 3 components 


// Email, password, text  ----> login and signup
// select, textarea ----> create and update

// single input --- data --> input 

// Input --- type -- text, email, password and many other 
// Select --- options
// Textarea --- long text