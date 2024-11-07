import React from "react";
import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function Loading({ isLoading = true }) {
  if (!isLoading) return <></>;
  return (
    <div className="z-10 w-screen justify-center items-center flex bg-black h-screen absolute opacity-70">
      <span className="border-gray-300 h-12 w-12 animate-spin rounded-full border-8 border-t-blue-600" /> 
      <p className="  max-[300px]:hidden  text-4xl  text-brandWhite ml-8">Loading</p>
      <div className="flex gap-2 items-center mt-4 ml-2">
    <div className="w-2 h-2 rounded-full animate-pulse bg-brandWhite"></div>
    <div className="w-2 h-2 rounded-full animate-pulse bg-brandWhite"></div>
    <div className="w-2 h-2 rounded-full animate-pulse bg-brandWhite"></div>
</div>
      </div>
  );
}
