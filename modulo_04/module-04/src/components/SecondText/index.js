import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <h2>
                <ShowText text="Hello World!" />
            </h2>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
