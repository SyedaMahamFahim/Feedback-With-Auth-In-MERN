import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = ({ type, message, id }) => {
  if (type === "success") {
    return toast.success(message, {
      toastId: id,
      autoClose: 4000,
    });
  } else if (type === "error") {
    return toast.error(message, {
      toastId: id,
      autoClose: 4000,
    });
  }
};

export default Notification;
