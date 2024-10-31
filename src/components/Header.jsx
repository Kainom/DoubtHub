import React from "react"

export default function Header(){
    return (
        <header className="bg-top"
            style={{
                borderBottom:'1px var(--border-color) solid',
            }}
        >
            <nav className="margin-x-8rem py-2 flex justify-between">
                <span className="brand-font">
                    DoubtHub
                </span>

                <form className="inline-block">
                    <input
                        className="w-96 rounded-md px-2 py-1"
                        style={{
                            border: '1px var(--border-color) solid',
                        }}
                        type="text"
                    />

                    <button
                        type="submit"
                        className="button-outline ml-2"
                    >
                        Search
                    </button>
                </form>
            </nav>
        </header>
    )
}