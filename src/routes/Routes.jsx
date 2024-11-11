// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/SignUp';
import Layout from '../pages/Layout';
import Questions from '../pages/Questions';
import QuestionDiscussion from '../pages/QuestionDiscussion';
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoutes";
import NewQuestion from "../pages/NewQuestion";

const AppRoutes = () => {
  const { isLoggedin } = useSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/login" element={!isLoggedin ? <Login /> : <Layout />} />
      <Route path="/register" element={!isLoggedin ? <Sign /> : <Layout />} />

     
      <Route path="/" element={<PrivateRoute element={<Layout />} isClosed={true} />}>
        <Route index element={<Home />} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/questions/:questionId" element={<QuestionDiscussion />} />
        <Route path="/new-question" element={<NewQuestion />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
