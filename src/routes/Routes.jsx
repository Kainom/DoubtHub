// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/SignUp';
import Layout from '../pages/Layout';
import Questions from '../pages/Questions';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Privado  = ({component,privado}) =>{
    const {isLoggedin} = useSelector(state => state.auth);
    return (
        privado && isLoggedin ? component : <Login/>
    )
}

const AppRoutes = () => {
    // const {isLoggedin} = useSelector(state => state.auth);
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Sign />} />
            
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/questions" element={<Questions />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;