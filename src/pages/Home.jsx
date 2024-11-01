/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Wrapper from "../components/Wrapper";

export default function Home() {
    return (
        <>
            <Header />
            <Wrapper>
                <SideBar />
                <p className="bg-white px-8 py-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores natus accusantium nesciunt. Commodi ea quas optio excepturi corporis, libero itaque! Non facere cum est, aliquid distinctio culpa nemo dicta explicabo.
                </p>
            </Wrapper>
            <Footer />
        </>
    );
}
