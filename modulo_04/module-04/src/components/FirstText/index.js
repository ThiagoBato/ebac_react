import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <h1>
                <ShowText text="Hello World!" />
            </h1>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
