import React,{useEffect} from "react";
import AuthForm from "../containers/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginAndSign = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login-register");
    }
  }, [isAuthenticated, navigate]);
  
  return (
    <>
      <AuthForm />
    </>
  );
};

export default LoginAndSign;
