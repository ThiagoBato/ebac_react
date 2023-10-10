import React from "react";
import ShowDate from "../ShowDate";
import ShowTime from "../ShowTime";
import ShowText from "../ShowText";

const FirstText = () => {
    return (
        <>
            <h3>
                <ShowText text="Hello World!" />
            </h3>
            <ShowTime />
            <ShowDate />
        </>
    );
};

export default FirstText;
