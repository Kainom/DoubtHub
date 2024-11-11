/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"
import OutlineButton from "./inputs/OutlineButton"
import { IoSearchSharp } from "react-icons/io5"


function UserIcon({ link, username }) {
    return (
        <a
            id="user-icon"
            href={link || "#"}
            className="
                bg-brandLighter
                h-9 w-9 ml-5 rounded-full
                flex place-content-center
                overflow-hidden"
        >
            <div className="rounded-lg shadow-md overflow-hidden">
                <img
                    src={`https://api.dicebear.com/9.x/croodles/svg?seed=foolano_di_tall`}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </a>
    );
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
                className="rounded-r-md px-2 py-1 w-full"
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

function BrandSpan({ link }) {
    return (
        <a
            id="brand-span"
            href={link || "#"}
            className="brand-font mr-5 my-auto rounded-l hover:bg-gray-100"
            style={{ fontSize: '1.4rem' }}
        >
            DoubtHub
        </a>
    );
}

export default function Header(props) {
    return (
        <header className="bg-top z-10
                fixed w-full top-0
                border-t-4 border-blue-500
            "
            style={{
                borderBottom: '1px var(--border-color) solid',
            }}
        >
            <nav className="margin-x py-2 header-navbar">
                <BrandSpan link="/questions"/>
                <SearchBar />
                <UserIcon link="/profile" />
            </nav>
        </header>
    )
}