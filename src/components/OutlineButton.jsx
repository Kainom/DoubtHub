/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function OutlineButton(props){
    return (
        <button
            type={props.type || 'button'}
            id={props.id}
            className="
                border-brandPrimary border-2 rounded-md
                text-brandPrimary ml-2 px-2 py-1
                hover:bg-brandPrimary hover:text-white
                transition-colors"
        >
            Search
        </button>
    )
}