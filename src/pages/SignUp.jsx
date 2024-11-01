import React from "react";
import InputText from "../components/inputs/inputText/InputText";
import ButtonForm from "../components/inputs/ButtonForm";

export default function SinginIn() {
  return (
    <main className="flex justify-center bg-red-200 w-full">
      <div className="mt-64 mr-20 max-[640px]:hidden bg-slate-500">
        <h3>Get unstuck - ask a question!</h3>
        <h3>Save your favorite posts, tags and filters</h3>
        <h3>Get inspired by the posts you like</h3>
      </div>

      <div className="rounded-lg bg-brandWhite shadow-custom  border-gray-500 mt-14  flex justify-center items-center max-w-2xl p-5">
        <form className="w-full p-2 px-6" action="#">
          <div className="w-full">
            <h1 className="text-3xl pt-4 pb-2 ">Create your account
            </h1>
            <p className="text-xs mb-4">
            By clicking “Sign up”, you agree to our terms of service and <br/> acknowledge you have read our privacy policy.
            </p>
          </div>
          <p className="ml-1.5 mt-4">Nome</p>
          <InputText placeholder="E-mail" name="email" />
          <p className="ml-1.5 mt-4">E-mail</p>
          <InputText placeholder="E-mail" name="email" customType={"email"} />
          <p className="ml-1.5 mt-4">Password</p>
          <InputText
            placeholder="Senha"
            name="password"
            customType={"password"}
          />
          <ButtonForm msg={"Sign Up"} />
        </form>
      </div>
    </main>
  );
}
