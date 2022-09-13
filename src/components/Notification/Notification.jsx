import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ type, message, id }) => {
  if (type === "success") {
    toast.success(message, {
      toastId: id,
      autoClose: 4000,
    });
  } else if (type === "error") {
    toast.error(message, {
      toastId: id,
      autoClose: 4000,
    });
  }

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notification;
