/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function OutlineButton(props){
    return (
        <button
            type={props.type || 'button'}
            id={props.id}
            name={props.name}
            className="
                border-brandPrimary border-2 rounded-md
                text-brandPrimary px-2 py-1
                hover:bg-brandPrimary hover:text-white
                transition-colors"
        >
            {props.text}
        </button>
    )
}