/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Tag from '../components/Tag'
import { MdDelete } from "react-icons/md";

function AnsweredIcon({ answered }) {
    return (
        <>
            <span className="center mr-2">
                {answered ?
                    <img
                        className="rounded w-6 bg-brandPrimary inline-block"
                        src="../../answered.svg"
                        style={{ padding: '1.5px' }}
                        alt="Answered" />
                    :
                    <img
                        className="rounded w-6 bg-gray-500 inline-block"
                        src="../../unanswered.svg"
                        style={{ padding: '1.5px' }}
                        alt="Unanswered" />
                }
            </span>
        </>
    )
}

export default function QuestionLink({question, handleDelete}) {
    const timestamp = new Date(question.timestamp).toLocaleString('en-US')
   
    return (
        <>
            <li
                className="w-full py-3"
                style={{ borderBottom: '1px solid #ccc' }}
            >
                <a 
                    style={{ fontSize: '1.2rem' }} 
                    href={`questions/${question.questionId}`}
                >
                    <AnsweredIcon answered={question.answered} />
                    <span
                        className="text-blue-800 hover:underline hover:text-blue-900 visited:text-purple-900"
                    >
                        {question.title}
                    </span>
                </a>
                <button
                    className='inline-block float-right'
                    onClick={() => {handleDelete(question.questionId)}}
                >
                    <MdDelete className='size-6 text-red-600' />
                </button>

                <p style={{ fontSize: "0.8rem" }} className="my-3 text-gray-800">
                    {question.description}
                </p>

                <div className="flex justify-between flex-wrap max-sm:flex-col max-sm:gap-2">
                    <div className="inline-flex content-center flex-wrap gap-1">
                        {question.tags.map((tag) => (
                            <Tag key={tag.id} tagname={tag.tagName}/>
                        ))}
                    </div>

                    <p
                        style={{ fontSize: "0.8rem" }}
                        className="inline-block text-gray-800 my-auto"
                    >
                        asked {timestamp}
                    </p>
                </div>
            </li>
        </>
    )
}