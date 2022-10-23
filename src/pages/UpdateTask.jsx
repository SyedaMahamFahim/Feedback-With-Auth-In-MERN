import React from "react";
import UpdateTaskForm from "../containers/UpdateTaskForm/UpdateTaskForm";
import Layout from "../Layout/Layout";

const UpdateTask = () => {
  return (
    <>
      <Layout title={"Update Tasks"} component={<UpdateTaskForm />} />
    </>
  );
};

export default UpdateTask;
