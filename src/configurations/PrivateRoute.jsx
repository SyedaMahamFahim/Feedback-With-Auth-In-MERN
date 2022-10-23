import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ children }) {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (isAuthenticated === false) {
      return <Navigate to="/login-register" />;
    } else{
      return children;
    }
  } 
  return children;
}

export default PrivateRoute;
