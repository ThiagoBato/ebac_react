import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <a href=" " className="textLink">
                <ShowText text="Hello World!" />
            </a>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
