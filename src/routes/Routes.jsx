// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<h1>register</h1>} />
            <Route path="/search" element={<h1>search results</h1>} />
        </Routes>
    )
}

export default AppRoutes;