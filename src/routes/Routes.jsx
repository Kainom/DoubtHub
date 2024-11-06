// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Sign from "../pages/SignUp";
import Layout from "../pages/Layout";
import Questions from "../pages/Questions";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const PrivateRout = ({ component: Component, isClosed }) => {
  const { isLoggedin } = useSelector((state) => state.auth);
  console.log(isLoggedin);
  console.log(isClosed);

  if (!isLoggedin && isClosed) {
    console.log("hello");
    return <Login />;
  }
  return Component;
};

const privado = ({ component: Component, isClosed: isClosed }) => {
  return <PrivateRout component={Component} isClosed={isClosed} />;
};

const AppRoutes = () => {
  const {isLoggedin} = useSelector(state => state.auth);

  return (
    <Routes>
      <Route path="/login" element={!isLoggedin?<Login />:<Layout/>} />
      <Route path="/register" element={!isLoggedin?<Sign />:<Layout/>} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/questions"
          element={<Questions/>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
