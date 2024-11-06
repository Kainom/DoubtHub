/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Wrapper from "../components/Wrapper";
import { useSelector } from "react-redux";
import Login from "./Login";

export default function Questions() {
    const { isLoggedin } = useSelector((state) => state.auth);
    if (!isLoggedin) {
        return <Login />;
    }
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
