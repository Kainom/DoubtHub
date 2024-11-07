import React from "react";
import { Spinner } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
export default function Loading({ isLoading = true }) {
  if (!isLoading) return <></>;
  return (
    <div className="z-10 w-screen justify-center items-center flex bg-black h-screen absolute opacity-70">
<Spinner className="z-20 absolute h-16 w-16" color="red" />;    </div>
  );
}
