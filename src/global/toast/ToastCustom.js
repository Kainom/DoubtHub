import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastColors = {
  success: {
    color: "#000",
  },
  error: {
    color: "#000",
  },
  info: {
    color: "#000",
  },
};

export const showToast = (type, message) => {
  const { background, color } = toastColors[type] || toastColors.info;

  toast(message, {
    style: {
      background,
      color,
      border: `1px solid #c0c0c0`,
      borderRadius: "5px",
      padding: "10px",
    },
    position: "top-right",
    autoClose: 2000,
  });
};
