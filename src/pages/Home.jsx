import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../redux/actions/taskActions";
import Tasks from "../containers/Tasks/Tasks";
const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch, error]);



  return (
    <>
      <Layout loading={loading} 
      error={error}
      title={"All Tasks"} component={<Tasks allTasks={tasks.Todos}/>} />
    </>
  );
};

export default Home;
