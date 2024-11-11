/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth } from "../store/redux/mods/auth/authSlice";

function SideBarListItem({ routeRef, children }) {
    return (
        <li className="block max-lg:text-center">
            <Link
                to={routeRef}
                className="
                    px-4 py-2 rounded-md block
                    max-sm:text-center
                    hover:bg-gray-100
                    active:bg-brandPrimary active:text-white
                "
            >
                {children}
            </Link>
        </li>
    );
}

function SideBarListButton({ routeRef, children }) {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(clearAuth());
        navigator("/login");
    };

    return (
        <li className="block max-lg:text-center">
            <Link
                to={routeRef}
                onClick={handleLogOut}
                className="
                    px-4 py-2 rounded-md block
                    max-sm:text-center
                    hover:bg-gray-100
                    active:bg-brandPrimary active:text-white
                "
            >
                {children}
            </Link>
        </li>
    );
}

export default function SideBar() {
    return (
        <nav className="bg-white sidebar">
            <ul
                className="
                    sticky top-14 grid grid-cols-4 px-1 py-2 min-w-36
                    max-sm:grid-cols-1 max-sm:grid-flow-row
                    lg:grid-cols-1 lg:grid-flow-row
                "
            >
                <SideBarListItem routeRef='/questions'>Home</SideBarListItem>
                {/* <SideBarListItem routeRef="/tags">Tags</SideBarListItem> */}
                <SideBarListItem routeRef="/new-question">New Question</SideBarListItem>
                <SideBarListItem routeRef="/profile">User Settings</SideBarListItem>
                <SideBarListButton routeRef="/">Log out</SideBarListButton>
            </ul>
        </nav>
    );
}
