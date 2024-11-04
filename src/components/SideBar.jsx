/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function SideBarListItem({ routeRef, children }) {
    return (
        <li className="block max-lg:text-center">
            <a
                href={routeRef}
                className="
                    px-4 py-2 rounded-md block
                    max-sm:text-center
                    hover:bg-gray-100
                    active:bg-brandPrimary active:text-white
                "
            >
                {children}
            </a>
        </li>
    )
}

export default function SideBar() {
    return (
        <nav className="bg-white sidebar">
            <ul
                className="
                    sticky top-14 grid grid-cols-4 px-1 py-2 min-w-36
                    max-sm:grid-cols-1 max-sm:grid-flow-row
                    lg:grid-cols-1 lg:grid-flow-row"
            >
                <SideBarListItem routeRef='/'>Home</SideBarListItem>
                <SideBarListItem routeRef='/search'>Questions</SideBarListItem>
                <SideBarListItem routeRef='/tags'>Tags</SideBarListItem>
                <SideBarListItem routeRef='/new-question'>New Question</SideBarListItem>
            </ul>

        </nav>
    )
}