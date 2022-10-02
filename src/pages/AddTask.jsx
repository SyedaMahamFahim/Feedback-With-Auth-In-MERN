import React, { useEffect } from "react";
import TaskForm from "../containers/TaskForm/TaskForm";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login-register");
    } else {
      navigate("/create-task");
    }
  }, [isAuthenticated, navigate]);
  return (
    <>
      <Layout title={"Create Tasks"} component={<TaskForm />} />
    </>
  );
};

export default AddTask;
