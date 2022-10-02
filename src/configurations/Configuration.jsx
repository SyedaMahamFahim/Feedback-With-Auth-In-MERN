import React from "react";
import { Home, AddTask, LoginAndSign } from "../pages";
import { Routes, Route } from "react-router-dom";

const Configuration = () => {
  return (
    <>
      <Routes>
        <Route path="login-register" element={<LoginAndSign />} />

        <Route path="/" element={<Home />} />
        <Route path="/create-task" element={<AddTask />} />
      </Routes>
    </>
  );
};

export default Configuration;
