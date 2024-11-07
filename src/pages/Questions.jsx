/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom'

import QuestionLink from "../components/QuestionLink"
import { useSelector } from "react-redux";

const questions = [
    {
        id: 1,
        answered: true,
        title: "How to center a div?",
        description: "I'm trying to center a div in my web app, but it doesn't work. Can someone help me, for God's sake?",
        tags: ['html', 'css'],
        timestamp: 'Oct. 11, 2024 at 10:50',
        user: 'zea_neen_gen'
    },
    {
        id: 2,
        answered: false,
        title: "How to create a responsive navigation bar?",
        description: "I'm trying to create a responsive navigation bar for my web app, but I can't figure out how to make it work. Here's the code I'm using:",
        tags: ['html', 'css', 'javascript'],
        timestamp: 'Nov. 04, 2024 at 16:46',
        user: 'foolano_di_tall'
    }
]

export default function Questions() {
    const [params, setParams] = useSearchParams()
    const query = params.get('search')
    var searchResults = []


    // const { isLoggedin } = useSelector((state) => state.auth);
    // const navigate = useNavigate();
  
    // useEffect(()=>{
    //    if(!isLoggedin){
    //       navigate("/login", { replace: true });
    //   }
    // },[navigate,isLoggedin])
  
  


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
                                answered={q.answered}
                                title={q.title}
                                description={q.description}
                                tags={q.tags}
                                timestamp={q.timestamp}
                                user={q.user}
                            />)
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
