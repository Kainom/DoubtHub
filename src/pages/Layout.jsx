/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, replace, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import Login from "./Login";

export default function Layout() {
  const { isLoggedin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

//   const [isRedirecting, setIsRedirecting] = useState(true);


//   useEffect(()=>{
//      if(!isLoggedin){
//         navigate("/login", { replace: true });
//     }
//   },[navigate,isLoggedin])

//   if(isRedirecting){
//     setTimeout(() => setIsRedirecting(false), 3000);
//     return <Login />;
//   }

//   if (!isLoggedin) {
//     navigate("/", { replace: true });
//     return <Login />;
//   }
  return (
    <>
      <Header />
      <Wrapper>
        <SideBar />
        <>
          <Outlet />
        </>
      </Wrapper>
      <Footer />
    </>
  );
}
