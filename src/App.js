import React, { useState,useEffect } from "react";
import { loadUser } from "./redux/actions/userAction";
import store from "./redux/store";
import axios from "axios";
import Configuration from "./configurations/Configuration";
const App = () => {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  


  // const handler=()=>{
  //   // get user data from backend and save it in redux store  
  // // using axios
  // axios.get(`/auth/user-profile/`).then((res)=>{
  //   console.log(res.data.user)
  // }).catch((err)=>{
  //   console.log(err)
  // })

  // }
  //   useEffect(() => {
  //     handler()
  // }, []);


// extra -- useEffect revision
  // useEffect(()=>{
  //   console.log("counter changed")
  // });
// extra end

  return (
    <>
    {/* useEffect revision start */}
    {/* <h1
    style={{
      textAlign:"center",
      fontSize:"50px",
    }}
    >{counter}</h1>
   
   <button onClick={()=>setCounter(counter+1)}>Click me</button> */}

   {/* useEffect revision end */}
      <Configuration />
    </>
  );
};

export default App;
