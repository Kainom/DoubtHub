/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import InputText from "../components/inputs/inputText/InputText";
import ButtonForm from "../components/inputs/ButtonForm";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../store/redux/mods/auth/authSlice";
import { showToast } from "../global/toast/ToastCustom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

export default function Login() {
  const { isLoading, isLoggedin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [failure, setFailure] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  console.log(isLoading);
  useEffect(() => {

    if (isLoggedin) {
      showToast("success", "Login realizado com sucesso");
        navigate("/");
    }
  }, [isLoggedin, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Header />
      <Loading isLoading={isLoading}/>
      <main className="flex  justify-center items-center flex-col  bg-slate-100 w-full h-screen">
        <div className="rounded-lg bg-brandWhite shadow-custom  border-gray-500 mx-auto flex justify-center items-center max-w-80 py-5">
          <form className="w-full p-2 px-6" action="#">
            <p className="">E-mail</p>
            <InputText
              placeholder="E-mail"
              name="email"
              value={email}
              // setEmail={setEmail}
              onChange={handleChangeEmail}
              isError={failure}
              customType={"email"}
            />
            <p className=" mt-4">Password</p>
            <InputText
              placeholder="Senha"
              name="password"
              value={password}
              // setPassword={setPassword}
              onChange={handleChangePassword}
              isError={failure}
              customType={"password"}
            />
            <ButtonForm
              // msg={"Log in"}
              action={handleLogin}
              disabled={false}
            />
          </form>
        </div>
        <div>
          <p className="text-sm text-center mt-10   text-bottomDark">
            Don’t have an account?
            <Link to={"/register"}>
              <span className="text-brandPrimary"> Sign up</span>
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
