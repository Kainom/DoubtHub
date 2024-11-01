import React from "react";
import InputText from "../components/inputs/inputText/InputText";
import ButtonForm from "../components/inputs/ButtonForm";
import { IoMdPricetags } from "react-icons/io";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiQuestionnaireFill } from "react-icons/ri";
import Icon from "../assets/svg/logo-stackoverflow.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function SinginIn() {
  return (
    <>
      <Header />
      <main className="flex  justify-center items-start  bg-slate-100 w-full h-screen">
        <div className="max-[640px]:hidden p-10 pt-20 mr-4 my-28 flex  flex-col gap-4 max-h-fit">
          <img 
            src={Icon}
            alt="Stack Overflow"
            className=" self-start bg-red flex "
          />

          <h3 className="flex items-center">
            {" "}
            <RiQuestionnaireFill size={24} className="mr-1" />
            Get unstuck - ask a question!
          </h3>
          <h3 className="flex items-center">
            <IoMdPricetags  size={24} className="mr-1"/> Save your favorite posts, tags and filters
          </h3>
          <h3 className="flex items-center">
            {" "}
            <GiDiamondTrophy size={24} className="mr-1" />
            Get inspired by the posts you like
          </h3>
          <p className="text-xs mb-4">
            Collaborate and share knowledge with a private group for FREE.
            <br />
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
        </div>

        <div className="relative rounded-lg bg-brandWhite shadow-custom  border-gray-500 mt-20  flex justify-center items-center max-w-2xl p-5 px-7 after:absolute after:w-3/4  max-h-fit mb-10 after:bg-slate-400 after:bottom-10 after:py-fineLin flex-col ">
          <div className="w-full px-6 ">
            <h1 className="text-3xl pt-4 pb-2 ">Create your account</h1>
            <p className="text-xs">
              By clicking “Sign up”, you agree to our terms of service and{" "}
              <br /> acknowledge you have read our privacy policy.
            </p>
          </div>
          <form className="w-full p-2 px-6" action="#">
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
          <span className="border-t border-slate-400 w-3/4 p-2 absolute bottom-0"></span>

          <p className="text-sm text-center mt-10  text-bottomDark">
            Já tem uma conta?
            <Link to={'/login'}>
              <span className="text-brandPrimary"> Login</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
