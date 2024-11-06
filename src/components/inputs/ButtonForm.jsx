/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
export default function ButtonForm({ msg = "Send", wight = "full" ,action}) {
  return (
    <button
    onClick={action}
      className={`bg-brandPrimary text-brandWhite rounded-md px-5 py-1.5 mt-4
               w-${wight} hover:bg-brandDark transition-all duration-75 `}
    >
      {msg}
    </button>
  );
}
