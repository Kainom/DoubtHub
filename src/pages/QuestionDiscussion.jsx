/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Tag from '../components/Tag'
import OutlineButton from "../components/inputs/OutlineButton"

import { questions, answers } from "./sample_data"

function QuestionDetails({ question }) {
    return (
        <>
            <div className="pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                <h1 className="text-2xl text-gray-700 mb-3">{question.title}</h1>
                <p className="text-sm text-gray-500">
                    asked {question.timestamp} by {question.user}
                </p>
            </div>
            <div className="pb-5">
                <p className="my-5">
                    {question.description}
                </p>
                <div className="flex content-center gap-1 flex-wrap">
                    {question.tags.map((tag) => <Tag key={tag} tagname={tag} />)}
                </div>
            </div>
        </>
    )
}

function AnswerList({ answersForQuestion }) {
    return (
        <>
            <div className="py-5">
                <h1 className="text-xl mb-3">
                    {answersForQuestion.length} {(answersForQuestion.length == 1) ? 'Answer' : 'Answers'}
                </h1>

                <div className="flex flex-col w-full">
                    {
                        answersForQuestion.map((answer) => (
                            <div
                                key={answer.id}
                                className="mb-5 py-2"
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <p className="text-gray-500 mb-1">{answer.user}</p>
                                <p className="px-2 py-1">{answer.text}</p>
                                <p className="text-sm text-gray-500 text-right">
                                    Answered {answer.timestamp}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
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
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e)}
        />
    )
}

function AnswerForm() {
    return (
        <form>
            <div className="mb-5">
                <div className="mb-3">
                    <label htmlFor="answer">
                        <h3
                            className="text-xl my-3"
                        >Answer this question</h3>
                    </label>
                    <FormTextArea
                        id="answer"
                        name="answer"
                        placeholder="e.g. Here's how you can solve it..."
                    />
                </div>
                <OutlineButton text="Answer" type="submit" />
            </div>
        </form>
    )
}

export default function QuestionDiscussion() {
    const { questionId } = useParams()

    const question = questions.find(q => q.id === parseInt(questionId))
    const answersForQuestion = answers.filter(r => r.questionId === parseInt(questionId))

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <QuestionDetails question={question} />
                <AnswerList answersForQuestion={answersForQuestion} />
                <AnswerForm />
            </div>
        </>
    )
}