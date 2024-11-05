/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

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

export default function QuestionLink(props) {
    return (
        <>
            <li
                className="w-full py-3"
                style={{ borderBottom: '1px solid #ccc' }}
            >
                <a style={{ fontSize: '1.2rem' }} href="questions">
                    <AnsweredIcon answered={props.answered} />
                    <span
                        className="text-blue-800 hover:underline hover:text-blue-900 visited:text-purple-900"
                    >
                        {props.title}
                    </span>
                </a>

                <p style={{ fontSize: "0.8rem" }} className="my-3 text-gray-800">
                    {props.description}
                </p>

                <div className="flex justify-between flex-wrap max-sm:flex-col max-sm:gap-2">
                    <div className="inline-flex content-center flex-wrap gap-1">
                        {props.tags.map((tag) => (
                            <a
                                href={`/tags/${tag}`}
                                className="
                                    inline-block font-mono font-bold
                                    text-gray-800 bg-slate-200 rounded p-1
                                    max-sm:text-end"
                                style={{ fontSize: '0.8rem' }}
                            >
                                {tag}
                            </a>
                        ))}
                    </div>

                    <p
                        style={{ fontSize: "0.8rem" }}
                        className="inline-block text-gray-800 my-auto"
                    >
                        asked {props.timestamp} by {props.user}
                    </p>
                </div>
            </li>
        </>
    )
}