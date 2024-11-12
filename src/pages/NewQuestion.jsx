/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import OutlineButton from "../components/inputs/OutlineButton";
import { useSelector } from "react-redux";

import { getAllTags, getQuestionById, updateQuestion } from "../utils/api";
import { createQuestion } from "../utils/api";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

function GoodQuestionInfo() {
  return (
    <div
      className="p-6 rounded bg-blue-50 border
              border-brandPrimary text-gray-800
                mb-5
            "
    >
      <h2 className="text-xl mb-2">Write a good question!</h2>
      <div className="text-sm">
        <p className="mb-2">
          The following steps will help you to write a good question:
        </p>

        <ul className="list-disc pl-8">
          <li>Be clear and concise.</li>
          <li>Ask a specific question.</li>
          <li>Provide relevant details.</li>
          <li>Be specific in your tags.</li>
        </ul>
      </div>
    </div>
  );
}

function FormCard({ children, title, description, haveCard = true }) {
  if (!haveCard) return <></>;
  return (
    <div className="rounded-lg border border-gray-300 px-6 py-5 shadow-md">
      <label htmlFor="">
        <h3 className="text-xl text-gray-800">{title}</h3>
        <p className="text-sm py-2 text-gray-700 font-light">{description}</p>
        {children}
      </label>
    </div>
  );
}

function FormInput({ id, name, type, placeholder, value, handler }) {
  return (
    <input
      id={id}
      name={name}
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => handler(e)}
    />
  );
}

function FormTextArea({ id, name, placeholder, value, handler }) {
  return (
    <textarea
      id={id}
      name={name}
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={(e) => handler(e)}
    />
  );
}

function FormTagInput({ id, name, value, handler, tagsList }) {
  return (
    <select
      id={id}
      name={name}
      className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
      value={value}
      onChange={handler}
    //   multiple={true}
    >
      {tagsList.map((tag) => (
        <option key={tag.id} value={tag}>
          {tag.tagName}
        </option>
      ))}
    </select>
  );
}

function NewQuestionForm() {
  const { questionId } = useParams()
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tried, setTried] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState(tags.length > 0 ? tags[0].id : null);
  const [tagsNova, setNovasTag] = useState([]);
  const { user } = useSelector((state) => state.auth.token);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchTags = async () => {
      const fetchTags = await getAllTags(user.userId);
      setTags(fetchTags);
    };
    fetchTags();
  }, []);


  useEffect(() => {
    if (tags.length > 0) {
      setTag(tags[0].id);
    }
  }, [tags]);

  useEffect(() => {
    async function getQuestion() {
      if (questionId) {
        const question = await getQuestionById(questionId)
        setTitle(question.title);
        setDescription(question.description);
        setTag(question.tags[0].id);
        setIsEditing(true)
      }
    }
    getQuestion()
  }, [questionId])

  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value); // Get the selected ID
    const selectedTagObject = tags.find((tag) => tag.id === selectedId); // Find the full tag object
    setTag(event.target.value); // Update the selected tag ID
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let novaTag = null;
    if (tags) novaTag = tags.find((ta) => ta.id == tag); // Find the full tag object

    var response
    if (isEditing) {
      const question = {
        questionId: questionId,
        title: title,
        description: description,
        tags: [novaTag]
      }
      response = await updateQuestion(question);
    }
    else {
      const question = {
        answered: false,
        title: title,
        description: description,
        tags: [novaTag],
        user: {
          userId: user.userId,
        },
      };

      response = await createQuestion(question);
    }

    console.log(response);
    if (response.status === 400) {
      toast.error(response.response.data);
    } else {
      toast.success("Question created successfully!");
      navigate("/questions");
    }
  };

  return (
    <>
      {
        (isEditing) ?
          <h1 className="text-2xl mb-5">Editing question</h1>
          :
          <>
            <h1 className="text-2xl mb-5">Asking a question</h1>
            <GoodQuestionInfo />
          </>
      }

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormCard
          title={"Title"}
          description={"Be specific. Imagine you're asking to another person."}
        >
          <FormInput
            value={title}
            handler={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
            id="question-title"
            name="question-title"
            type="text"
            placeholder="e.g. How do I center a div in HTML?"
          />
        </FormCard>

        <FormCard
          title={"What is hurting?"}
          description={
            "Introduce the problem and explain in details. Maximum of 300 characters."
          }
        >
          <FormTextArea
            value={description}
            handler={(e) => {
              e.preventDefault();
              setDescription(e.target.value);
            }}
            id="question-description"
            name="question-description"
            placeholder="Describe your problem"
          />
        </FormCard>

        {/* <FormCard
            title={"What did you try and what were you expecting?"}
            description={"Describe what you tried, what it resulted and what were the expected results."}
        >
            <FormTextArea
                value={tried}
                handler={(e) => {
                    e.preventDefault()
                    setTried(e.target.value)
                }}
                id="question-tried"
                name="question-tried"
                placeholder='"I tried so hard, and got so far!"'
            />
        </FormCard> */}

        <FormCard
          haveCard={tags}
          title={"Tags"}
          description={
            "Use keywords (tags) to describe what your question is about."
          }
        >
          <select
            hidden={!tags || tags.length === 0} // hide if tags is null or empty
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
            value={tag}
            onChange={handleSelectChange}
          // multiple={true}
          >
            {(Array.isArray(tags) ? tags : []).map((tag) => (
              <option key={tag.id} value={tag.id}>
                {tag.tagName}
              </option>
            ))}
          </select>
        </FormCard>

        <FormCard
          title={(isEditing) ? "Update question?" : "Ask question?"}
          description={
            "Review your question and the information you provided. When you're done, confirm your post."
          }
        >
          <OutlineButton text={(isEditing) ? "Update question" : "Ask question"} type="submit" />
        </FormCard>
      </form>
    </>
  );
}

export default function NewQuestion() {
  return (
    <>
      <div className="w-full lg:pl-12 py-8">
        <NewQuestionForm />
      </div>
    </>
  );
}
