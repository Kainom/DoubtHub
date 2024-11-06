import React from "react";





// eslint-disable-next-line react/prop-types
export default function Loading({isLoading}){
    if(!isLoading) return <></>;

    console.log("you")
    
    return (
        <div className="z-10 w-screen flex bg-black h-screen absolute opacity-25">
 <span className="loading loading-spinner loading-lg bg-black"></span>
 </div>
    )
}
