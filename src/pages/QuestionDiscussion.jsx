/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import Tag from '../components/Tag'
import OutlineButton from "../components/inputs/OutlineButton"
import { BiSolidMessageEdit } from "react-icons/bi";

import { createAnswer, getAnswers, getQuestionById } from "../utils/api"
import { useSelector } from "react-redux"
import QuestionLink from "../components/QuestionLink"
import { MdDelete } from "react-icons/md";
import { deleteAnswer } from "../utils/api";

function datetime(json_timestamp) {
    return new Date(json_timestamp).toLocaleString('en-US')
}

function QuestionDetails({ question }) {

    return (
        <>
            <div className="pb-2" style={{ borderBottom: '1px solid #ccc' }}>
                <h1 className="text-2xl text-gray-700 mb-3">{question.title}</h1>
                <p className="text-sm text-gray-500 mb-5">
                    asked {datetime(question.timestamp)}
                </p>
                <Link className="text-brandDark" to={`/edit-question/${question.questionId}`}>
                    <BiSolidMessageEdit className="size-5 inline-block mr-2"/>
                    <p className="inline-block text-sm">Edit question</p>
                </Link>
            </div>
            <div className="pb-5">
                <p className="my-5">
                    {question.description}
                </p>
                <div className="flex content-center gap-1 flex-wrap">
                    {
                        (!question.tags) ?
                            <></>
                            :
                            question.tags.map((tag) => <Tag key={tag.id} tagname={tag.tagName} />)}
                </div>
            </div>
        </>
    )
}

function AnswerList({ answersForQuestion, handleDeleteAnswer }) {
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
                                key={answer.answerId}
                                id={answer.answerId}
                                className="mb-5 py-2"
                                style={{ borderBottom: '1px solid #ccc' }}
                            >
                                <p className="text-gray-500 inline-block mb-1">
                                    Answer of {datetime(answer.timestamp)}
                                </p>
                                <button
                                    className='inline-block float-right'
                                    onClick={() => { handleDeleteAnswer(answer.answerId) }}
                                >
                                    <MdDelete className='size-6 text-red-600' />
                                </button>
                                <p className="px-2 py-1">{answer.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

function FormTextArea({ id, name, placeholder, value, handler }) {
    return (
        <textarea
            id={id}
            name={name}
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
            rows="4"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handler(e)}
        />
    )
}

function AnswerForm({ questionId }) {
    const [text, setText] = useState("")
    const { user } = useSelector(state => state.auth.token);
    const navigate = useNavigate()

    const handlerSubmit = () => {
        createAnswer({
            text: text,
            question: {
                questionId: questionId
            },
            user: {
                userId: user.userId
            }
        })

        navigate(`/questions/${questionId}`)
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div className="mb-5">
                <div className="mb-3">
                    <label htmlFor="answer">
                        <h3
                            className="text-xl my-3"
                        >Answer this question</h3>
                    </label>
                    <FormTextArea
                        value={text}
                        handler={(e) => {
                            e.preventDefault()
                            setText(e.target.value)
                        }}
                        id="answer"
                        name="answer"
                        placeholder="e.g. Here's how you can solve it..."
                    />
                </div>
                <OutlineButton text="Answer" type="submit"/>
            </div>
        </form>
    )
}

export default function QuestionDiscussion() {
    const { questionId } = useParams()
    const [question, setQuestion] = React.useState([]);
    const [answers, setAnswers] = React.useState([]);

    const handleDeleteAnswer = (answerId) => {
        deleteAnswer(answerId)
        setAnswers(answers.filter(answer => answer.answerId !== answerId))
    }

    useEffect(() => {
        async function getQuestions() {
            const fetchQuestions = await getQuestionById(parseInt(questionId));
            setQuestion(fetchQuestions);
            try {
                const fetchAnswers = await getAnswers(parseInt(questionId))
                setAnswers(fetchAnswers)
            }
            catch {
                setAnswers([])
            }
        }
        getQuestions();
    }, [questionId])

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <QuestionDetails question={question} />
                <AnswerList answersForQuestion={answers} handleDeleteAnswer={handleDeleteAnswer} />
                <AnswerForm questionId={questionId} />
            </div>
        </>
    )
}