/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React } from "react";

export default function InputText({
  isError,
  customType = "text",
  wight = "full",
}) {
  return (
    <input
      type={customType}
      className={`
        w-${wight}
      border-borderColor border rounded-sm
            text-brandPrimary px-1 py-0.5
      ${isError && "border-red-600"}
    focus:ring-4 focus:ring-blue-300
    rounded-xl
    
    `}
    ></input>
  );
}
