// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

import OutlineButton from "../components/inputs/OutlineButton";
import { useSelector } from "react-redux";

import { createTag } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { showToast } from "../global/toast/ToastCustom";
import InputText from "../components/inputs/inputText/InputText";

export default function NewTag() {
  const { user } = useSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [tagName, setTagName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await createTag(user.userId, tagName);
      showToast("success", "Tag criada com sucesso!");
      navigate(`/questions`);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Ocorreu um erro ao tentar criar a tag.");
    }

    setIsLoading(false);
  };

  return (
    <main className="flex justify-center w-1/2 mx-auto mt-10 p-20 grid ">
        <div className="shadow-custom px-20 py-6 h-56 rounded-md ">
        <h1 className="text-xl font-bold text-center mb-7">Nova Tag</h1>

        <form
        onSubmit={handleSubmit}
        className="bg-slate-400   w-1/2 grid grid-cols-[1fr] gap-6 h-5"
      >
        <InputText
          type="text"
          placeholder="Nome da Tag"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          wight="w-11/12"
          className="col-span-full"
        />
        <OutlineButton
          type="submit"
          isLoading={isLoading}
          text={"New Tag"}
        ></OutlineButton>
      </form>
        </div>
     
    </main>
  );
}
