/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import OutlineButton from "../components/inputs/OutlineButton"

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
    )
}

function FormCard({ children, title, description }) {
    return (
        <div
            className="rounded-lg border border-gray-300 px-6 py-5 shadow-md"
        >
            <label htmlFor="">
                <h3 className="text-xl text-gray-800">{title}</h3>
                <p className="text-sm py-2 text-gray-700 font-light">{description}</p>
                {children}
            </label>
        </div>
    )
}

function FormInput({ id, name, type, placeholder }) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <input
            id={id}
            name={name}
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    )
}

function FormTextArea({ id, name, placeholder }) {
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    return (
        <textarea
            id={id}
            name={name}
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    )
}

function FormTagInput({ id, name, placeholder }) {
    // not working
    const [value, setValue] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        const keys = [' ', 'Enter', 'Shift', ',', '.', ';', '/', '-']

        console.log(e.key, e.target.value)
        if (keys.includes(e.target.value)) {
            setValue(value + ", ")
            return
        }

        setValue(e.target.value)
    }

    return (
        <input
            id={id}
            name={name}
            className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
            type={"text"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    )
}

function NewQuestionForm() {
    return (
        <form action="" className="flex flex-col gap-4">
            <FormCard
                title={"Title"}
                description={"Be specific. Imagine you're asking to another person."}
            >
                <FormInput
                    id="question-title"
                    name="question-title"
                    type="text"
                    placeholder="e.g. How do I center a div in HTML?"
                />
            </FormCard>

            <FormCard
                title={"What is hurting?"}
                description={"Introduce the problem and explain in details. Maximum of 300 characters."}
            >
                <FormTextArea
                    id="question-description"
                    name="question-description"
                    placeholder="Describe your problem"
                />
            </FormCard>

            <FormCard
                title={"What did you try and what were you expecting?"}
                description={"Describe what you tried, what it resulted and what were the expected results."}
            >
                <FormTextArea
                    id="question-tried"
                    name="question-tried"
                    placeholder='"I tried so hard, and got so far!"'
                />
            </FormCard>

            <FormCard
                title={"Tags"}
                description={"Use keywords (tags) to describe what your question is about."}
            >
                <FormTagInput
                    id="question-title"
                    name="question-title"
                    className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm"
                    placeholder="e.g. html, css, javascript"
                />
            </FormCard>

            <FormCard
                title={"Ask question?"}
                description={"Review your question and the information you provided. When you're done, confirm your post."}
            >
                <OutlineButton text="Ask question" type="submit" />
            </FormCard>
        </form>
    )
}

export default function NewQuestion() {
    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <h1
                    className="text-2xl mb-5"
                >Asking a question</h1>

                <GoodQuestionInfo />

                <NewQuestionForm />
            </div>
        </>
    )
}