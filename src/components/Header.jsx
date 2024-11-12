/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OutlineButton from "./inputs/OutlineButton";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function UserIcon({ link, username }) {
  const {user} = useSelector(state => state.auth.token);
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
          src={`https://api.dicebear.com/9.x/croodles/svg?seed=${user.username}`}
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
        id="search-icon"
        className="inline-block bg-borderColor rounded-l-md m-auto py-2.5 px-1.5"
      >
        <IoSearchSharp size={16} color="white" />
      </label>
      <input
        name="search"
        id="search"
        className="rounded-r-md mr-2 px-2 py-1 w-full"
        style={{
          border: "1px var(--border-color) solid",
        }}
        type="text"
        placeholder="Search for questions..."
      />

      <OutlineButton text="Search" type="submit" />
    </form>
  );
}

function BrandSpan({ link }) {
  return (
    <a
      id="brand-span"
      href={link || "#"}
      className="brand-font mr-5 my-auto rounded-l hover:bg-gray-100"
      style={{ fontSize: "1.4rem" }}
    >
      DoubtHub
    </a>
  );
}

function SpanHeader({text,where}) {
  return (
    <Link className="flex items-center" to={where}>
     <span
      className="
        border-brandPrimary border-2 rounded-md
        text-brandPrimary px-2 py-
        hover:bg-brandPrimary hover:text-white
        transition-colors"
    >
        {text}
    </span>
    </Link>
   
  );
}

export default function Header(props) {
  const { isLoggedin } = useSelector((state) => state.auth);
  return (
    <header
      className="bg-top z-10
                fixed w-full top-0
                border-t-4 border-blue-500
            "
      style={{
        borderBottom: "1px var(--border-color) solid",
      }}
    >
      <nav
        className={`${isLoggedin ? "margin-x" : "ml-7 mr-4"} py-2 ${
          isLoggedin ? "header-navbar" : "flex justify-between flex-wrap"
        }`}
      >
        <BrandSpan link={isLoggedin ? "/questions" : "/register"} />
        {isLoggedin ? <SearchBar /> : null}
        {isLoggedin ? <UserIcon link="/profile" /> : null}
        {!isLoggedin ? (
          <div className="flex gap-4  px-2">
            <SpanHeader text={"Log in"} where={"/login"}/>
            <SpanHeader text={"Sign up"} where={"/register"}/>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
