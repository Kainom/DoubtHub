/* eslint-disable react/prop-types */
export default function Tag({tagname}){
    return (
        <>
            <a
                href={`/tags/${tagname}`}
                className="
                    inline-block font-mono font-bold
                    text-gray-800 bg-slate-200 rounded p-1
                    max-sm:text-end"
                style={{ fontSize: '0.8rem' }}
            >
                {tagname}
            </a>
        </>
    )
}