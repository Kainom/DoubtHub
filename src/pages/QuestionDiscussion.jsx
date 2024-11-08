/* eslint-disable no-unused-vars */
import React from "react"
import { useParams } from "react-router-dom"
import Tag from '../components/Tag'

import { questions, answers } from "./sample_data"

export default function QuestionDiscussion() {
    const { questionId } = useParams()

    const question = questions.find(q => q.id === parseInt(questionId))
    const answersForQuestion = answers.filter(r => r.questionId === parseInt(questionId))

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <div className="pb-2" style={{borderBottom: '1px solid #ccc'}}>
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
                        {question.tags.map( (tag) => <Tag key={tag} tagname={tag} />)}
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-xl mb-3">
                        {answersForQuestion.length} {(answersForQuestion.length==1)?'Answer':'Answers'}
                    </h1>

                    <div className="flex flex-col w-full">
                        {
                            answersForQuestion.map((answer) => (
                                <div
                                    key={answer.id}
                                    className="mb-5 py-2"
                                    style={{borderBottom:'1px solid #ccc'}}
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
            </div>
        </>
    )
}