// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<h1>login</h1>} />
            <Route path="/register" element={<h1>register</h1>} />
            <Route path="/search" element={<h1>search results</h1>} />
        </Routes>
    )
}

export default AppRoutes;