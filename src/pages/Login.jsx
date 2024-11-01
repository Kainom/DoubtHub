/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputText from "../components/inputs/inputText/InputText";
import ButtonForm from "../components/inputs/ButtonForm";
import { Link } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState(false);
  return (
    <>
      <main className="">
        <div className="rounded-lg bg-brandWhite shadow-custom  border-gray-500 mt-44 mx-auto flex justify-center items-center max-w-80 py-5">
          <form className="w-full p-2 px-6" action="#">
            <p className="ml-1.5">E-mail</p>
            <InputText
              placeholder="E-mail"
              name="email"
              isError={error}
              customType={"email"}
            />
            <p className="ml-1.5 mt-4">Password</p>
            <InputText
              placeholder="Senha"
              name="password"
              isError={error}
              customType={"password"}
            />
            <ButtonForm msg={"Log in"} />
          </form>
        </div>
        <p className="text-sm text-center mt-10  text-bottomDark">
          Don’t have an account?
          <Link to={"/register"}>
            <span className="text-brandPrimary">  Sign up</span>
          </Link>
        </p>
      </main>
    </>
  );
}
