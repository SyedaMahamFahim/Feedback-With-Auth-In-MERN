import React from "react";
import TaskDetails from "../containers/TaskDetails/TaskDetails";
import Layout from "../Layout/Layout";

const SingleTask = () => {
  return (
    <>
      <Layout title={"Tasks Details"} component={<TaskDetails />} />
    </>
  );
};

export default SingleTask;
