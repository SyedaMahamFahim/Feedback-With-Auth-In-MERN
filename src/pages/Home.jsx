import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../redux/actions/taskActions";
import Tasks from "../containers/Tasks/Tasks";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const { loading, error, tasks } = useSelector((state) => state.tasks);

  // 
  const { isAuthenticated} = useSelector((state) => state.user);

  useEffect(() => {
    if(!isAuthenticated){
      navigate("/login-register")
    }
    else{
      dispatch(getTasks());
    }
    
  }, [dispatch, error,isAuthenticated,navigate]);

  return (
    <>
      <Layout
        title={"All Tasks"}
        component={
          <Tasks loading={loading} error={error} allTasks={tasks.Todos} />
        }
      />
    </>
  );
};

export default Home;
