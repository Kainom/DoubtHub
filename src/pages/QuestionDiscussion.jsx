/* eslint-disable no-unused-vars */
import React from "react"
import { useParams } from "react-router-dom"
import Tag from '../components/Tag'

import { questions, responses } from "./sample_data"

export default function QuestionDiscussion() {
    const { questionId } = useParams()

    const question = questions.find(q => q.id === parseInt(questionId))
    const responsesForQuestion = responses.filter(r => r.questionId === questionId)

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <div style={{borderBottom: '1px solid #ccc'}}>
                    <h1 className="text-2xl text-gray-700 mb-3">{question.title}</h1>
                    <p className="text-sm text-gray-500 mb-2">
                        asked {question.timestamp} by {question.user}
                    </p>
                </div>
                <div>
                    <p className="my-5">
                        {question.description}
                    </p>
                    <div className="flex content-center gap-1 flex-wrap">
                        {question.tags.map( (tag) => <Tag key={tag} tagname={tag} />)}
                    </div>
                </div>
            </div>
        </>
    )
}