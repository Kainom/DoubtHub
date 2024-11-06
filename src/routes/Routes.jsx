// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Sign from '../pages/SignUp';
import { useSelector } from 'react-redux';

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
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Sign/>} />
            <Route path="/search" element={<h1>search results</h1>} />
        </Routes>
    )
}

export default AppRoutes;