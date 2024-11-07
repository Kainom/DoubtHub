/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element,isClosed }) => {
    const { isLoggedin } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigate();
  
    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 500); 
    
        return () => clearTimeout(timer);
      }, [isLoggedin]);
    
  if (isLoading && isClosed) {
    return <Loading isLoading={isLoading} />;
  }

  if (isClosed && !isLoggedin) {
    return navigator("/login");
  }


  return element;
};
  
  export default PrivateRoute;

  