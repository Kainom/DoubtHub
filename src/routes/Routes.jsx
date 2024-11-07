// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/SignUp';
import Layout from '../pages/Layout';
import Questions from '../pages/Questions';
import QuestionDiscussion from '../pages/QuestionDiscussion';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Sign />} />
            
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/questions/:questionId" element={<QuestionDiscussion />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;