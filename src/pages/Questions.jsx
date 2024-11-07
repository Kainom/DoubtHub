/* eslint-disable no-unused-vars */
import React from "react";
import { useSearchParams } from 'react-router-dom'

import QuestionLink from "../components/QuestionLink"

import { questions } from "./sample_data"

export default function Questions() {
    const [params, setParams] = useSearchParams()
    const query = params.get('search')
    var searchResults = []

    const searchInTitle = () => {
        searchResults = searchResults.concat(questions.filter(q => {
            q.title.toLowerCase().includes(query.toLowerCase())
        }))
    }
    const searchInTags = () => {
        searchResults = searchResults.concat(questions.filter(q => {
            q.tags.includes(query.toLowerCase())
        }))
    }
    const searchWordsInTitleAndTags = () => {
        searchResults = searchResults.concat(questions.filter(q => {
            for (let word of query.split(' ')) {
                if (q.title.toLowerCase().includes(word.toLowerCase()) ||
                    q.tags.includes(word.toLowerCase())
                ) {
                    return true
                }
                return false
            }
        }))
    }

    if (query) {
        searchInTitle()
        searchInTags()
        searchWordsInTitleAndTags()
    }
    else {
        searchResults = questions
    }

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <h1 className="text-2xl mb-5">All Questions</h1>

                {query ?
                    <p className="mb-5">
                        <span className="mr-1">Results for:</span>
                        <span>{'"'}{query}{'"'}</span>
                    </p> :
                    <></>
                }

                <div className="w-full">
                    <ul
                        className="flex flex-col w-full"
                        style={{ borderTop: '1px solid #ccc' }}
                    >
                        {searchResults.map((q) => {
                            return (<QuestionLink
                                key={q.id}
                                question={q}
                            />)
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
