/* eslint-disable no-unused-vars */
import React from "react";

export default function Footer(){
    return (
        <footer
            className="text-center py-4
                flex justify-evenly flex-wrap
                align-middle w-full "
            style={{backgroundColor: '#101010'}}
        >
            <p
                className="inline-block text-white my-auto py-2"
            >2023 KOW. All rights reserved.</p>
            <img
                className="w-24 inline-block"
                src="../../white-kow.svg" alt="KOW"
            />
        </footer>
    );
}