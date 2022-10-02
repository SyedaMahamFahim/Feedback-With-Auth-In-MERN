import React, { useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";
import store from "./redux/store";
import Configuration from "./configurations/Configuration";
const App = () => {


  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <>
      <Configuration />
    </>
  );
};

export default App;
