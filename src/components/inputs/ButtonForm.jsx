import React from "react";

// eslint-disable-next-line react/prop-types
export default function ButtonForm({ msg = "Send", wight = "full" }) {
  return (
    <button
      className={`bg-brandPrimary text-brandWhite rounded-md px-5 py-1.5 mt-4
               w-${wight}`}
    >
      {msg}
    </button>
  );
}
