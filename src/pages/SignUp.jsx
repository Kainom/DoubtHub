/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import InputText from "../components/inputs/inputText/InputText";
import ButtonForm from "../components/inputs/ButtonForm";
import { IoMdPricetags } from "react-icons/io";
import { GiDiamondTrophy } from "react-icons/gi";
import { RiQuestionnaireFill } from "react-icons/ri";
import Icon from "../assets/svg/logo-stackoverflow.svg";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../utils/api";
import Loading from "../components/Loading";
import { showToast } from "../global/toast/ToastCustom";
import { toast } from "react-toastify";
export default function SinginIn() {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, username, password);
    setIsLoading(true);
    try {
      const response = await createUser({ username, email, password });
      showToast("Success","User has been created with sucess")
      navigate("/");
    } catch (err) {
      console.log("Error: ", err.message);
      toast.error(
        "Failed to register",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      
      setIsLoading(false);
      return;
    }
  };

  const handleChangeName = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log("Hello");
  }, [isLoading]);

  return (
    <>
      <Header />
      <Loading isLoading={isLoading} />
      <main className="flex  justify-center items-start max-[430px]:px-10  bg-slate-100 w-full h-screen">
        <div className="max-[640px]:hidden   p-10 pt-20 mr-4 my-28 flex  flex-col gap-4 max-h-fit">
          <img
            src={Icon}
            alt="Stack Overflow"
            className=" self-start bg-red flex "
          />

          <h3 className="flex items-center">
            {" "}
            <RiQuestionnaireFill size={24} className="mr-1" />
            Be free, ask and answer          </h3>
          <h3 className="flex items-center">
            <IoMdPricetags size={24} className="mr-1" />Save your important questions here
          </h3>
          <h3 className="flex items-center">
            {" "}
            <GiDiamondTrophy size={24} className="mr-1" />
            Learnd and remenber 
          </h3>
          <p className="text-xs mb-4">
          Collaborate and share knowledge on DoubtHub   <br /> a platform designed for you to post and answer your own questions          
          </p>
        </div>

        <div className="relative rounded-lg bg-brandWhite shadow-custom  border-gray-500 mt-20  flex justify-center items-center max-w-2xl p-5 px-7 after:absolute after:w-3/4  max-h-fit mb-10 after:bg-slate-400 after:bottom-10 after:py-fineLin flex-col ">
          <div className="w-full px-6 ">
            <h1 className="text-3xl pt-4 pb-2 ">Create your account</h1>
            <p className="text-xs">
            Register and enjoy DoubtHub a platform tailored for you to <br />ask, answer, and engage with questions on your own terms.
            </p>
          </div>
          <form className="w-full p-2 px-6" action="#">
            <p className="mt-4">Username</p>
            <InputText
              placeholder="Username"
              value={username}
              onChange={handleChangeName}
              name="username"
            />
            <p className="mt-4">E-mail</p>
            <InputText
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              customType={"email"}
            />
            <p className="mt-4">Password</p>
            <InputText
              placeholder="Senha"
              name="password"
              value={password}
              onChange={handleChangePassword}
              customType={"password"}
            />
            <ButtonForm msg={"Sign Up"} action={handleSubmit} />
          </form>
          <span className="border-t border-slate-400 w-3/4 p-2 absolute bottom-0"></span>

          <p className="text-sm text-center mt-10  text-bottomDark">
            Already have an account?
            <Link to={"/login"}>
              <span className="text-brandPrimary"> Login</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
