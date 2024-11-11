/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import OutlineButton from "./inputs/OutlineButton"
import { IoSearchSharp } from "react-icons/io5"
import { FaUserAstronaut } from "react-icons/fa";

function UserIcon(props) {
    return (
        <a
            id="user-icon"
            href=""
            className="
            bg-brandDark
            h-9 w-9 ml-5 rounded-full
            flex place-content-center
            overflow-hidden"
        >
            <FaUserAstronaut className="h-full size-6 text-brandLighter"/>
            {/* <img src={props.src} alt="" /> */}
        </a>
    )
}

function SearchBar() {
    return (
        <form
            className="flex justify-center align-middle md:mx-10 max-sm:order-3 max-sm:col-span-2 max-sm:mt-2"
            action="/questions"
        >
            <label
                htmlFor="search"
                id='search-icon'
                className="inline-block bg-borderColor rounded-l-md m-auto py-2.5 px-1.5"
            >
                <IoSearchSharp size={16} color="white" />
            </label>
            <input
                name="search"
                id="search"
                className="rounded-r-md mr-2 px-2 py-1 w-full"
                style={{
                    border: '1px var(--border-color) solid'
                }}
                type="text"
                placeholder="Search for questions..."
            />

            <OutlineButton text="Search" type="submit" />
        </form>
    )
}

function BrandSpan() {
    return (
        <span
            id='brand-span'
            className="brand-font mr-5 my-auto"
            style={{ fontSize: '1.4rem' }}
        >
            DoubtHub
        </span>
    )
}

export default function Header(props) {
    return (
        <header className="bg-top z-10
                fixed w-full top-0
            "
            style={{
                borderBottom: '1px var(--border-color) solid',
            }}
        >
            <nav className="margin-x py-2 header-navbar">
                <BrandSpan />
                <SearchBar />
                <UserIcon src="" />
            </nav>
        </header>
    )
}