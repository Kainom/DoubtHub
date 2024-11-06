/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Wrapper from "../components/Wrapper";

export default function Questions() {
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
