/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom'

import QuestionLink from "../components/QuestionLink";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allQuestions, deleteQuestion } from "../utils/api";

export default function Questions() {
    const { user } = useSelector(state => state.auth.token);
    const [questionsList, setQuestionsList] = React.useState([]);
    const [params, setParams] = useSearchParams();

    const handleDelete = (questionId) => {
        deleteQuestion(questionId)
        setQuestionsList(questionsList.filter(q => q.questionId !== questionId))
    }

    useEffect(() => {
        async function getQuestions() {
            const fetchQuestions = await allQuestions(user.userId);
            setQuestionsList(fetchQuestions);
        }
        getQuestions();
    }, [])

    const query = params.get("search");
    var searchResults = [];

    const searchInTitle = () => {
        searchResults = searchResults.concat(
            questionsList.filter((q) => {
                q.title.toLowerCase().includes(query.toLowerCase());
            })
        );
    };
    const searchInTags = () => {
        searchResults = searchResults.concat(
            questionsList.filter((q) => {
                q.tags.includes(query.toLowerCase());
            })
        );
    };
    const searchWordsInTitleAndTags = () => {
        searchResults = searchResults.concat(
            questionsList.filter((q) => {
                for (let word of query.split(" ")) {
                    if (
                        q.title.toLowerCase().includes(word.toLowerCase()) ||
                        q.tags.includes(word.toLowerCase())
                    ) {
                        return true;
                    }
                    return false;
                }
            })
        );
    };

    if (query) {
        searchInTitle();
        searchInTags();
        searchWordsInTitleAndTags();
    } else {
        searchResults = questionsList;
    }

    return (
        <>
            <div className="w-full lg:pl-12 py-8">
                <h1 className="text-2xl mb-5">All Questions</h1>

                {query ? (
                    <p className="mb-5">
                        <span className="mr-1">Results for:</span>
                        <span>
                            {'"'}
                            {query}
                            {'"'}
                        </span>
                    </p>
                ) : (
                    <></>
                )}

                <div className="w-full">
                    <ul
                        className="flex flex-col w-full"
                        style={{ borderTop: "1px solid #ccc" }}
                    >
                        {(searchResults == []) ?
                            <div className="my-5 text-center">
                                <p className="text-xl text-gray-700 mb-5">
                                    No questions asked. Try {' '}
                                    <Link
                                        className="text-brandDark underline"
                                        to='/new-question/'
                                    >
                                        asking a new question!
                                    </Link>
                                </p>
                            </div>
                            :
                            searchResults.map((q) => {
                                return <QuestionLink
                                    key={q.questionId}
                                    question={q}
                                    handleDelete={handleDelete} />;
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}
