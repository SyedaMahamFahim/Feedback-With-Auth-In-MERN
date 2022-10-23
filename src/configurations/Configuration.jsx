import React from "react";
import { Home, AddTask, LoginAndSign, UpdateTask, SingleTask } from "../pages";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Configuration = () => {
  return (
    <>
      <Routes>
        <Route path="/login-register" element={<LoginAndSign />} />

        <Route
          path={"/"}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path={"/create-task"}
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
        />

        <Route
          path={"/task/update/:id"}
          element={
            <PrivateRoute>
              <UpdateTask />
            </PrivateRoute>
          }
        />

        <Route
          path={"/task/details/:id"}
          element={
            <PrivateRoute>
              <SingleTask />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Configuration;
